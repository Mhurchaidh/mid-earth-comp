import React from 'react';
import { NavLink } from "react-router-dom";
import pngegg from "../Symbols/pngegg.png";
import mirkwood from "../Symbols/mirkwood.png.png";
import maiar from "../Symbols/maiar-symbol.png";
import Certh from "../Symbols/Certh_19.svg.png";
import WhiteHand from "../Symbols/WhiteHand.png"

function RaceList() {

    return (
        <div className="race-container">
            <NavLink className='race' id="men" to='/men'>
                <h1>Men</h1>
                <img className='symbol men' src={pngegg}/>
            </NavLink>
            <NavLink className='race' id="elves" to='/elves'>
                <h1>Elves</h1>
                <img className='symbol elves' src={mirkwood}/>
            </NavLink>
            <NavLink className='race' id="maiar" to='/maiar'>
                <h1>Maiar</h1>
                <img className='symbol maiar' src={maiar}/>
            </NavLink>
            <NavLink className='race' id="dwarves" to='/dwarves'>
                <h1>Dwarves</h1>
                <img className='symbol dwarves' src={Certh}/>
            </NavLink>
            <NavLink className='race' id="orc-kind" to='/orc-kind'>
                <h1>Orc-kind</h1>
                <img className='symbol orc-kind' src={WhiteHand}/>
            </NavLink>
        </div>
        
    )
}

export default RaceList;