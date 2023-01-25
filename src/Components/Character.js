function Character({character, onCharacterChange}) {
    const {name, image} = character;

    const handleCharacterChange = () => {
        onCharacterChange(character.id)
    }

    return (
        <div className="character-page" onClick={handleCharacterChange}>
            <div className="character-card">
                <h3>{name}</h3>
                <img src={image}/>
            </div>
            
        </div>
    )
}

export default Character;