import React, { useEffect,useState } from "react";
import "./App.css";
import Photo from "./Photo";
import DatePicker from 'react-date-picker';
import {Button} from "reactstrap";
import styled from "styled-components";

const H1 = styled.h1 `
  color: #626682;
`
const axios = require('axios').default;

function App() {
  const [data, setData] = useState([]);
  let [date, setDate] = useState(new Date());
  const api_key = "ga5G05hA7bJmW4iVUSpBfGWqSaiG2ZNZXTjuM4U5";

  const changeDate = date => {
    setDate(date);
  }

  useEffect(() => {
      if (date == null){
        date = new Date();
      }
      axios.get('https://api.nasa.gov/planetary/apod?api_key=' + api_key + '&date=' + date.toISOString().split('T')[0])
      .then(function(response){
        console.log(response);
        setData(response.data);
      })
      .catch(function(error){
        console.log(error);
      })
  },[date])

  if (!data) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <H1>
        NASA Photo of the Day <span role="img" aria-label='go!'>🚀</span>!
      </H1>
      
        <DatePicker 
          onChange={changeDate}
          value = {date}/>
        <Photo 
          date={data.date}
          desc={data.explanation}
          copy={data.copyright}
          url={data.url}
          title={data.title}
        />
    </div>
  );
}

export default App;
