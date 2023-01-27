import { Link } from 'react-router-dom';

function Header({race, onRaceChange}) {

    return (
        <div className="header" >
            <Link id="home-button" to='/' onClick={() => onRaceChange('')}>
                <h1>Middle-Earth Compendium</h1>
            </Link>
            
        </div>
    )
}

export default Header;