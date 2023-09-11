import React from "react";
import { useState } from "react";
import Header from "./Header"
import Planet from "./Planet";
import Footer from "./Footer";

export default function App(){
    const [currectPlanetId, setCurrectPlanetId] = useState(0)
    return(
        <div>
            <Header handleNewId={setCurrectPlanetId}/>
            <Planet planetId={currectPlanetId}/>
            <Footer planetId={currectPlanetId}/>
        </div>
    )
}