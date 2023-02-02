import React from 'react';
import { Link } from "react-router-dom";
import WhiteHand from "../Symbols/WhiteHand.png";
import whiteree from '../Symbols/whitetree.png';
import whitemirkwood from '../Symbols/whitemirkwood.png';
import certhwhite from '../Symbols/certhwhite.png';
import maiarsymbolwhite from '../Symbols/whitemaiarsymbol.png';

function RaceList() {

    return (
        <div>
            <div className="race-container">
                <Link className='race' id="men" to='/men'>
                    <h1>Men</h1>
                    <img className='symbol men' id='white-tree' src={whiteree} alt='White Tree of Gondor'/>
                </Link>
                <Link className='race' id="elves" to='/elves'>
                    <h1>Elves</h1>
                    <img className='symbol elves' id='mirkwood' src={whitemirkwood} alt='Mirkwood'/>
                </Link>
                <Link className='race' id="maiar" to='/maiar'>
                     <h1>Maiar</h1>
                    <img className='symbol maiar' id='black-speech' src={maiarsymbolwhite} alt='The One Ring'/>
                </Link>
                <Link className='race' id="dwarves" to='/dwarves'>
                    <h1>Dwarves</h1>
                    <img className='symbol dwarves' id='certh' src={certhwhite} alt='Wealth'/>
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