import axios from "axios"


const key =process.env.REACT_APP_Key;	
const weatherUrl='http://dataservice.accuweather.com/currentconditions/v1/';
const cityUrl ='http://dataservice.accuweather.com/locations/v1/cities/search';


export const data=async(city)=>{
     
    const cityQuery =`?apikey=${key}&q=${city}`;
    const cityData = await axios.get(cityUrl+cityQuery)
                     
    
   
    const weatherquery=cityData.data[0].Key+'?apikey='+key; 
    const weatherData =await axios.get(weatherUrl+weatherquery)
                                
 
   
    return {cityData,weatherData}                   
} 