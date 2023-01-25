import { Link } from 'react-router-dom';

function Character({character, onCharacterChange}) {
    const {name, image} = character;

    const handleCharacterChange = () => {
        onCharacterChange(character.lotr_page_id)
    }

    return (
        <Link to={character.name} className="character-page" onClick={handleCharacterChange}>
            <div className="character-card">
                <h3>{name}</h3>
                <img src={image}/>
            </div>
            
        </Link>
    )
}

export default Character;