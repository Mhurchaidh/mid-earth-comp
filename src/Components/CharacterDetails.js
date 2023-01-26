import { useParams } from "react-router-dom";

function CharacterDetails({characters}) {

    const {characterName} = useParams();

    const character = characters.find(char => char.name.toLowerCase() === characterName)

    return (
        <div className="character-details">
            <h1>{character.name}</h1>
            <h2>{character.culture} - {character.gender}</h2>
            <p>{character.text}</p>
        </div>
    )
}

export default CharacterDetails;