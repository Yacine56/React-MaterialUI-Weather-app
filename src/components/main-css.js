import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) => ({
  container: {
    padding: "4em",
    
    marginTop: "4em",
    backgroundColor: "#FFDEE9",
    backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
    [theme.breakpoints.down("sm")]:{
      padding:"2em 0 "
    }
  },

  textContainer: {
    width: "300px",
    marginBottom:"3em",
    margin: "auto",
    
  },
  title: {
    color: "orange",
    fontFamily: "Raleway",
    fontSize: "2rem",
    textDecoration: "underline",
    marginBottom: "3em",
  },
  Button: {
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    color: "white",
    fontSize: "1rem",
    fontWeight: 600,
    marginTop: "3em",
  },
  text: {
    
  },
  icon:{
    height:"15em",
    width:"14em",
   margin:"auto"
  },
  iconContainer:{
    zIndex:"1300",
    width:"17em",
    marginTop:"-7.5em",
    backgroundColor:"white",
    borderRadius:"50%",
  
  },
  weatherInfo:{
    height:"70em",
    
      backgroundColor:"white",
    [theme.breakpoints.down("sm")]:{
      height:"50em",
     }
  }
}));
