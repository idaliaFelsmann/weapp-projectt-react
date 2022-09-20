import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin"/>
      <footer>
        Coded by Idalia F. {" "}
        <a href="https://github.com/idaliaFelsmann/weapp-projectt-react"> open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}