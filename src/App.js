import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [coords, setCoords] = useState({ lat: 40.7608, lng: -111.891 });
  const [date, setDate] = useState(
    `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
  );

  let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${lng}&lat=${lat}&date=${date}&api_key=${process.env.REACT_APP_API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div className="App">
      <h1>NASA API</h1>
    </div>
  );
};

export default App;
