import React from "react";
import "./index.css"
export default function Header(props){
    const listPlanet = [
        {"name": "MERCURY", "key": 1}, 
        {"name": "VENUS", "key": 2}, 
        {"name": "EARTH", "key":3}, 
        {"name": "MARS", "key": 4}, 
        {"name": "JUPITER", "key": 5}, 
        {"name": "SATURN", "key": 6}, 
        {"name":"URANUS", "key":7}, 
        {"name":"NEPTURE", "key":8}
    ]
    const catorgeory = listPlanet.map((planet, id) => 
    <ul className="planets-list" key={planet["key"]}>
        <li onClick={() => props.handleNewId(id)}>{planet["name"]}</li>
    </ul>)

    return(
    <header>
        <p>THE PLANETS</p>
        <div className="planet-container">
            {catorgeory}
        </div>
    </header>)
}