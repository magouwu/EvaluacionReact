import { useState } from "react";
export default function useWeather() {
  const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
  const [weather, setWeather] = useState([]);

  //fetch al endpoint https://api.datos.gob.mx/v1/condiciones-atmosfericas
  const getWeather = () => {

      return fetch(url)
      .then(response => response.json())
      .then((data) => {
     setWeather(data)
      })
      .catch((error) => {
       console.error('Error:', error);  
      });
    }

  // busqueda por nombre
  const searchByName = async (query) =>{
    weather.results.map((results)=>results.name===query)

  }

  return { getWeather, weather,searchByName };
}
