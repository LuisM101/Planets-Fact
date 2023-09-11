import React, { useState } from "react";
import data from "./data";


export default function Planet(props){
    const planetInfo = data[props.planetId]
    const [currectSection, setCurrectSection] = useState("overview")
    const [currectImage, setCurrectImage] = useState("planet")


    function handleOverview(){
        setCurrectImage("planet")
        setCurrectSection("overview")
    }

    function handleInternal(){
        setCurrectImage("internal")
        setCurrectSection("structure")
    }

    function handleGeology(){
        setCurrectImage("geology")
        setCurrectSection("geology")
    }   
    return(
    <main>
        <div className="image-container">{currectImage === "geology" ? 
            <div className="geology-container">
                <img src={planetInfo["images"]["planet"]} alt="geology-overlay"/>
                <img className="geology-center"src={planetInfo["images"][currectImage]} alt="geology-top"/>
            </div> 
                : 
                <img src={planetInfo["images"][currectImage]} alt="planet img"/> }
            </div>
        <div className="planet-info-container">
            <div>
                <h1>{planetInfo["name"]}</h1>
                <p className="planet-content">{planetInfo[currectSection]["content"]}</p>
                <p className="source">Source <a href={planetInfo[currectSection]["source"]}> Wikipedia</a></p>
            </div>
            <div className="section-container">
                <button className={currectSection === "overview" ? "section-button-active" : "section-button"} onClick={handleOverview}><span className="number-section">01</span> OVERVIEW</button>
                <button className={currectSection === "structure" ? "section-button-active" : "section-button"} onClick={handleInternal}><span className="number-section" >02</span>  INTERNAL STRUCTURE</button>
                <button className={currectSection === "geology" ? "section-button-active" : "section-button"}onClick={handleGeology}><span className="number-section" >03</span> SURFACE GEOLOGY</button>
            </div>
        </div>
    </main>)
}