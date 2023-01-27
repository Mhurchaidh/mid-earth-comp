import { useParams } from "react-router-dom";

function CharacterDetails({characters}) {

    const {characterRace, characterName} = useParams();

    const character = characters.find(char => char.name.toLowerCase() === characterName)

    return (
        <div className="character-details">
            <h1 className={`${characterRace}-h1`}>{character.name}</h1>
            <h2 className={`${characterRace}-h2`}>{character.culture} - {character.gender}</h2>
            <span className={`${characterRace}-span`}>
                <p className={`${characterRace}-p`}>{character.text}</p>
            </span>
            
        </div>
    )
}

export default CharacterDetails;