function CharacterDetails({character}) {

    return (
        <div className="character-details">
            <img src={character.imageA}/>
            <h1>{character.name}</h1>
            <h2>{character.race} - {character.gender}</h2>
            <p>{character.description}</p>
        </div>
    )
}

export default CharacterDetails;