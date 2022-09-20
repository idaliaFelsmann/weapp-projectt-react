import React from "react";
import './App.css';
import Weatherf from "./Weatherf";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weatherf defaultCity="Berlin"/>
      <footer>
        Coded by Idalia F. {" "}
        <a href="https://github.com/idaliaFelsmann/weapp-projectt-react"> open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}