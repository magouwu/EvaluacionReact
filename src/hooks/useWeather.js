import { useState, useEffect } from "react";
export default function useWeather() {
  const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
  const [weather, setWeather] = useState([]);
  const [page,setPage] = useState(1)
  
  //useEffect para el cambio de pagina
  useEffect((e) => {
    console.log()
    getWeather()
  }, [page]);
  
  //fetch al endpoint https://api.datos.gob.mx/v1/condiciones-atmosfericas
  const getWeather = () => {
    
      return fetch(url+'?page='+page)
      .then(response => response.json())
      .then((data) => {
     setWeather(data)
     console.log('En que pagina estamos?',page)
     console.log(data)
      })
      .catch((error) => {
       console.error('Error:', error);  
      });
    }

  // busqueda por nombre
  // const searchByName = async (query) =>{
    // const search = weather.results.filter((value)=>{
  // })
// }

  return { getWeather, weather,setPage };
}
