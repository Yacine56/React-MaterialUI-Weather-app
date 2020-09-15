import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) => ({
 
  appbar: {
    height: "4em",
    flexGrow: 1,
    backgroundColor: "#FBAB7E",
    backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
   
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,

    [theme.breakpoints.down("md")]: {
      marginBottom: "2.5rem",
    },
  },
   
  title:{
    flexGrow: 1,
    fontFamily:"Raleway",
    fontSize:"3rem",
    fontWeight:800,
    margin:"0.5em 3em",
    marginLeft:"5em",
    color:"white"
  }
}));
