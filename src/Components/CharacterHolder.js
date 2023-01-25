import Character from './Character';
import CharacterDetails from './CharacterDetails';
import { useState } from 'react';

function CharacterHolder({race, characters}) {

    
    const filteredList = characters.filter(character => {
        if(race === 'orc-kind') {
            if(character.race === "Uruk-hai" || character.race === "Orcs") {
                return character
            }
        }
        else return character.race === race
    })

    const [currentCharacter, setCurrentCharacter] = useState(filteredList[0])

    const onCharacterChange = (id) => {
        const selectedCharacter = filteredList.find(character => character.id === id)
        setCurrentCharacter(selectedCharacter);
    }

    const characterList = filteredList.map(character => {
        return <Character key={character.id} character={character} onCharacterChange={onCharacterChange}/>
    })
    

    return (
        <div className='characters-page'>
            <div className='characters-list'>
                {characterList}
            </div>
            <CharacterDetails character={currentCharacter}/>
        </div>
    )
}

export default CharacterHolder;