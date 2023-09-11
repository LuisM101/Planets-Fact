import React from "react";
import data from "./data";
import "./footer.css"

export default function Footer(props){
     return(
     <footer>
        <div className="planet-detail-container">
            <p className="title">ROTATION TIME</p>
            <p className="planet-detail" >{data[props.planetId]["rotation"]}</p>
        </div>
        <div className="planet-detail-container">
            <p className="title" >REVOLUTION TIME</p>
            <p className="planet-detail" >{data[props.planetId]["revolution"]}</p>
        </div>
        <div className="planet-detail-container" >
            <p className="title" >RADIUS</p>
            <p className="planet-detail" >{data[props.planetId]["radius"]}</p>
        </div>
        <div className="planet-detail-container" >
            <p className="title" >AVERAGE TEMP.</p>
            <p className="planet-detail" >{data[props.planetId]["temperature"]}</p>
        </div>

     </footer>)
}