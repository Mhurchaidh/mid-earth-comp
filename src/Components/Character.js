import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Character({character}) {
    const {name, image} = character;

    const {characterRace} = useParams();

    return (
        <Link to={`${character.name.toLowerCase()}`} className="character-page">
            <div className={`character-card ${characterRace}-card`}>
                <h3>{name}</h3>
                <img src={image}/>
            </div>
            
        </Link>
    )
}

export default Character;