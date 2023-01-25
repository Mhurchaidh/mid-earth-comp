import Character from './Character';
import CharacterDetails from './CharacterDetails';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from "./Search";

function CharacterHolder({race, characters}) {
    const [searchTerm, setSearchTerm] = useState("")
    
    const filteredList = characters.filter(character => character.race === race
    )
    .sort((characterA, characterB) => characterA.name.localeCompare(characterB.name))
    .filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const [currentCharacter, setCurrentCharacter] = useState(filteredList[0])

    const onCharacterChange = (id) => {
        const selectedCharacter = filteredList.find(character => character.lotr_page_id === id)
        setCurrentCharacter(selectedCharacter);
    }

    const characterList = filteredList.map(character => {
        return <Character key={character.id} character={character} onCharacterChange={onCharacterChange}/>
    })
    

    return (
        <div className='characters-page'>
            <div>
                <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                <div className='characters-list'>
                    {characterList}
                </div>
            </div>
            {/* {testing for nested routes} */}
            <Routes>
                <Route path={`${currentCharacter.race}/${currentCharacter.name}`} element={/*move this back out below div*/<CharacterDetails character={currentCharacter}/>}/>
            </Routes>
            
        </div>
    )
}

export default CharacterHolder;