import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useWeather from "../hooks/useWeather";
function Elements() {
    const { getWeather, weather } = useWeather();
    useEffect(() => {
      getWeather()
    }, []);
    const [page, setPage] = useState(0);
    // const [query, setQuery] = useState(null);
    console.log(weather);
    // const handleQuery = (event) =>{
    //   event.preventDefault()
    // }
    //funcion para imprimir de 10 en 10 elementos
     const weatherToShow = weather?.results?.slice(page, page + 10).map((results) => (
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
      <>
        <WeatherTable>
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
          {weatherToShow}
        </WeatherTable>
  
        <button onClick={() => setPage(page - 10)} disabled={page < 10}>
          {" "}
          Previous{" "}
        </button>
        <button onClick={() => setPage(page + 10)}>Next</button>
        {/* <form onSubmit={handleQuery}>
        <input type='text' onChange={(event)=>setQuery(event.target.value)}></input>
        <button type='Submit'> Search </button>
        </form> */}
      </>
    );
  }
  const WeatherTable = styled.table`
    width: 100%;
    height: 500px;
    border-collapse: collapse;
    background-color: #89d2ff;
    th {
      border: 2px solid;
      padding: 8px;
    }
    td {
      border: 2px solid;
      padding: 8px;
    }
    .column:nth-child(odd) {
      background-color: #fff;
    }
    .column:nth-child(even) {
      background-color: #c1e3f7;
    }
  `;
export default Elements