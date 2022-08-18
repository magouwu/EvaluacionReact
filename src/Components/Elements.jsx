import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useWeather from "../hooks/useWeather";
function Elements() {
    const { getWeather, weather,setPage } = useWeather();

    const [move, setMove] = useState(0);
    // const [query, setQuery] = useState(null);
    console.log(weather);
    // const handleQuery = (event) =>{
    //   event.preventDefault()
    //   searchByName(query)
    // }

    //condicional para cambiar de pagina en caso de que llegue a los 100 elementos
    if(move===100){
      setPage(current=>current+1)
      setMove(0)//reinicia el valor de los elementos mostrados al llegar a 100
    }
    if(move===-10){
      console.log('antes',move)
      setPage(current=>current-1)
      setMove(90)
      console.log('despues',move)
    }

    //funcion para imprimir de 10 en 10 elementos
     const weatherToShow = weather?.results?.slice(move, move + 10).map((results) => (
        <tr className="column">
        <td className="info">{results._id}</td>
        <td className="info">{results.cityid}</td>
        <td className="info">{results.name}</td>
        <td className="info">{results.state}</td>
        <td className="info">{results.probabilityofprecip}</td>
        <td className="info">{results.relativehumidity}</td>
        <td className="info">{results.lastreporttime}</td>
        <td className="info">{`${
          results.probabilityofprecip > 60 || results.relativehumidity > 50
            ? "Llueve"
            : "No Llueve"
        }`}</td>
      </tr>
))
  
    return (
      <><TableContainer>
        <WeatherTable>
          <thead>
          <tr>
            <th>_Id</th>
            <th>citiid</th>
            <th>name</th>
            <th>state</th>
            <th>probabilityofprecip</th>
            <th>relativehumidity</th>
            <th>lastreporttimeformato(YYYY/MM/DD)</th>
            <th>LLUEVE</th>
          </tr>
          </thead>
          {weatherToShow}
        </WeatherTable>
        </TableContainer>
        <button onClick={() => setMove(current=>current - 10)} >
          {" "}
          Previous{" "}
        </button>
        <button onClick={() => setMove(current=>current + 10)}>Next</button>
        {/* <form onSubmit={handleQuery}>
        <input type='text' onChange={(event)=>setQuery(event.target.value)}></input>
        <button type='Submit'> Search </button> */} 
        {/* </form> */}
      </>
    );
  }
  const WeatherTable = styled.table`
     border-collapse: collapse;
    background-color: #89d2ff;
    
    td, th {
      border: 2px solid;
      padding: 5px 10px;
    }
    .column:nth-child(odd) {
      background-color: #fff;
    }
    .column:nth-child(even) {
      background-color: #c1e3f7;
    }
  `;
  const TableContainer = styled.div`
  padding: 0 0 1em em;
  
`
export default Elements