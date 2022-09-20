import React from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit (event) {
    event.preventDefault(); 
    setUnit("fahrenheit");
  }

  function showCelsius (event) {
    event.preventDefault(); 
    setUnit("celsius");
  }

  function fahrenheit() {
return (props.celcius * 9) / 5 + 32;

if (unit === "celsius") { 

  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C L <a href="/" onClick = {showFahrenheit}> 
      °F</a>
      </span>
    </div>
  );
}
else {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        {Math.round.(fharenheit())}</span>
      <span className="unit"> 
        <a href ="/" onClick = {showFahrenheit}> 
      °C</a>
      </span>
    </div>
  )
}
}