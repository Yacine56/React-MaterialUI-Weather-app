import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyle } from "./Header-css";



function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

const Header = () => {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openDrawer,setDrawer]=useState(false)
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer=()=>{
    setDrawer(!openDrawer)
  } 
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <IconButton onClick={toggleDrawer}> 
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <Tabs style={{ height: "50px", marginLeft: "auto" }}>
              <Tab
                label="More"
                onClick={handleMenu}
                style={{
                  color: "white",
                  opacity: 1,
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              />
            {openDrawer===false && <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
                classes={{ paper: classes.Menu }}
              >
                <MenuItem onClick={handleClose}>saved</MenuItem>
                <MenuItem onClick={handleClose}>most Popular</MenuItem>
              </Menu>}
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      
         <Drawer open={openDrawer} classes={{paper:classes.drawer}} onClose={toggleDrawer}>
          <List>
            <ListItem button divider>
               <ListItemText disableTypography primary="saved" className={classes.listText}/>
              
            </ListItem>
            <ListItem button divider>
               <ListItemText disableTypography primary="Most Popular" className={classes.listText}/>
            </ListItem>
          </List>
         </Drawer>
    </React.Fragment>
  );
};

export default Header;
