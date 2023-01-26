import Character from './Character';
import Search from "./Search";
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function CharacterHolder({ characters }) {
    const [searchTerm, setSearchTerm] = useState("")

    const {characterRace} = useParams();
    
    const filteredList = characters.filter(character => character.race.toLowerCase() === characterRace)
    .sort((characterA, characterB) => characterA.name.localeCompare(characterB.name))
    .filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const characterList = filteredList.map(character => {
        return <Character key={character.lotr_page_id + character.name} character={character}/>
    })

    return (
        <div className='characters-page'>
            <div className='characters-page-left'>
                <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                    <div className='characters-list'>
                        {characterList}
                    </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default CharacterHolder;