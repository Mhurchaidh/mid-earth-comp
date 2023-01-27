import Character from './Character';
import Search from "./Search";
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import pngegg from "../Symbols/pngegg.png";
import mirkwood from "../Symbols/mirkwood.png.png";
import maiar from "../Symbols/maiar-symbol.png";
import Certh from "../Symbols/Certh_19.svg.png";
import WhiteHand from "../Symbols/WhiteHand.png";

function CharacterHolder({ characters, onRaceChange }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [raceSymbol, setRaceSymbol] = useState('');
    const {characterRace} = useParams();
    
    const filteredList = characters.filter(character => character.race.toLowerCase() === characterRace)
    .sort((characterA, characterB) => characterA.name.localeCompare(characterB.name))
    .filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const characterList = filteredList.map(character => {
        return <Character key={character.id + character.name} character={character}/>
    })

    const navigate = useNavigate();
    useEffect(() => {
        onRaceChange(characterRace)
        switch(characterRace){
            case 'men':
                setRaceSymbol(pngegg);
                break;
            case 'elves':
                setRaceSymbol(mirkwood);
                break;
            case 'maiar':
                setRaceSymbol(maiar);
                break;
            case 'dwarves':
                setRaceSymbol(Certh);
                break;
            case 'orcs':
                setRaceSymbol(WhiteHand);
                break;
        }
        navigate(`${filteredList[0].name.toLowerCase()}`)
    }, [])

    

    return (
        <div>
            <div className={`characters-page `}>
                <div className='characters-page-left'>
                    <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                        <div className='characters-list'>
                            {characterList}
                        </div>
                </div>
                <Outlet/>
                <img className='race-symbol' src={raceSymbol}/>
            </div>
        </div>
    )
}

export default CharacterHolder;