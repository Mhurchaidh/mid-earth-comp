function CharacterDetails({character}) {

    return (
        <div className="character-details">
            <h1>{character.name}</h1>
            <h2>{character.culture} - {character.gender}</h2>
            <p>{character.text}</p>
        </div>
    )
}

export default CharacterDetails;