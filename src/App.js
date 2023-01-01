import clsx from "clsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { useState, useEffect } from "react";
const api = "https://jsonplaceholder.typicode.com/posts";
function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((datajson) => datajson.json())
      .then((datajs) => setdata(datajs));
  }, []);
  console.log(data);
  return (
    <div className="App">
      {data.map((dt) => {
        return (
          <ul>
            <li>{dt.title}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
