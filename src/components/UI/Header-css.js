import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) => ({
  menuIcon: {
    color: "white",
    height: "3em",
    width: "3em",
   
  },
  appbar: {
    height: "4em",
    backgroundColor: "#FBAB7E",
    backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
   
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,

    [theme.breakpoints.down("md")]: {
      marginBottom: "2.5rem",
    },
  },
  Menu: {
    backgroundColor: "#FBAB7E",
    backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
    color: "white",
    fontSize: "1rem",
    fontWeight: 600,
    
  },
  drawer:{
    marginTop:"4em",
    backgroundColor: "#FBAB7E",
    backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  listText:{
    color:"white",
    fontFamily:"raleway"
    ,fontWeight:500,
    fontSize:"1.5rem"
  }
}));
