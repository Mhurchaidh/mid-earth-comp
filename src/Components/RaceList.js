import React from 'react';
import { Link } from "react-router-dom";
import pngegg from "../Symbols/pngegg.png";
import mirkwood from "../Symbols/mirkwood.png.png";
import maiar from "../Symbols/maiar-symbol.png";
import Certh from "../Symbols/Certh_19.svg.png";
import WhiteHand from "../Symbols/WhiteHand.png";

function RaceList() {

    return (
        <div>
            <div className="race-container">
                <Link className='race' id="men" to='/men'>
                    <h1>Men</h1>
                    <img className='symbol men' id='white-tree' src={pngegg} alt='White Tree of Gondor'/>
                </Link>
                <Link className='race' id="elves" to='/elves'>
                    <h1>Elves</h1>
                    <img className='symbol elves' id='mirkwood' src={mirkwood} alt='Mirkwood'/>
                </Link>
                <Link className='race' id="maiar" to='/maiar'>
                     <h1>Maiar</h1>
                    <img className='symbol maiar' id='black-speech' src={maiar} alt='The One Ring'/>
                </Link>
                <Link className='race' id="dwarves" to='/dwarves'>
                    <h1>Dwarves</h1>
                    <img className='symbol dwarves' id='certh' src={Certh} alt='Wealth'/>
                </Link>
                <Link className='race' id="orc-kind" to='/orcs'>
                     <h1>Orc-kind</h1>
                    <img className='symbol orc-kind' id='white-hand' src={WhiteHand} alt='White Hand of Saruman'/>
                </Link>
            </div>
        </div>
        
    )
}

export default RaceList;