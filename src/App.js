import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setlong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setlong(position.coords.longitude);
    });
    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  return <div className="App"></div>;
}

export default App;
