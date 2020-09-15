import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { useStyle } from "./Header-css";
import Typography from "@material-ui/core/Typography";





const Header = () => {
  const classes = useStyle();





  return (
    <React.Fragment>
     
        <AppBar position="fixed" className={classes.appbar}>
        
          <Toolbar disableGutters >
          <Typography variant="h5" className={classes.title} >
             The Weather App
           </Typography>
            
            
          </Toolbar>
        </AppBar>
     
      
    </React.Fragment>
  );
};

export default Header;
