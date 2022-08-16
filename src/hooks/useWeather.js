import { useState } from "react";
export default function useWeather() {
  const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
  const [weather, setWeather] = useState([]);
  const getWeather = async () => {
    try {
      let response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      console.error("error del fetch", err);
    }
  };
  
  const searchByName = async (query) =>{
    weather.results.map((results)=>results.name===query)

  }

  return { getWeather, weather,searchByName };
}
