import React from "react";
import "./Weatherf.css";

export default function Weatherf() {
return (
    <div className="Weather">
        <form>
        <div className="row">
        <div className="col-9">
            <input type="search" placeholder="Enter city..." className="form-control"/>
            </div>
            <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        
        </div>
        </form>
        <h1>Japan</h1>
        <ul>
            <li>
                Monday 10:00
            </li>
            <li>
                Mostly Cloudy  
            </li>
        </ul>
        <div className="row">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/>
        13°C
        </div>
        <div className="col-6">
            <ul>
                <li>
                    Precipitation: 13%
                </li>
                <li>
                    Humidity: 72%
                </li>
                <li>
                    Wind: 13km/hr
                </li>
            </ul>
            </div>
        </div>
    </div>
);

}