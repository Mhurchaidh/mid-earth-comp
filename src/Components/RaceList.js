import React from 'react';
import { NavLink, Link } from "react-router-dom";

function RaceList({searchTerm, characters}) {

    const filteredMen = characters.filter(character => {
        if(searchTerm !== ''){
            return character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.race === "Men"
        }})
        .map(character => {
        return <Link>{character.name}</Link>
        })

      const filteredElves = characters.filter(character => {
        if(searchTerm !== ''){
            return character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.race === "Elves"
        }})
        .map(character => {
        return <Link>{character.name}</Link>
        })

      const filteredMaiar = characters.filter(character => {
        if(searchTerm !== ''){
            return character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.race === "Maiar"
        }})
        .map(character => {
        return <Link>{character.name}</Link>
        })

      const filteredDwarves = characters.filter(character => {
        if(searchTerm !== ''){
            return character.name.toLowerCase().includes(searchTerm.toLowerCase()) && character.race === "Dwarves"
        }})
        .map(character => {
        return <Link>{character.name}</Link>
        })

      const filteredOrckind = characters.filter(character => {
        if(searchTerm !== ''){
            return character.name.toLowerCase().includes(searchTerm.toLowerCase()) && (character.race === "Uruk-hai" || character.race === "Orcs")
        }})
        .map(character => {
        return <Link>{character.name}</Link>
        })

    return (
        <div className="race-container">
            <NavLink className='race' id="men" to='/men'>
                <h1>Men</h1>
                {filteredMen}
            </NavLink>
            <NavLink className='race' id="elves" to='/elves'>
                <h1>Elves</h1>
                {filteredElves}
            </NavLink>
            <NavLink className='race' id="maiar" to='/maiar'>
                <h1>Maiar</h1>
                {filteredMaiar}
            </NavLink>
            <NavLink className='race' id="dwarves" to='/dwarves'>
                <h1>Dwarves</h1>
                {filteredDwarves}
            </NavLink>
            <NavLink className='race' id="orc-kind" to='/orc-kind'>
                <h1>Orc-kind</h1>
                {filteredOrckind}
            </NavLink>
        </div>
        
    )
}

export default RaceList;