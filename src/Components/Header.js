import { Link } from 'react-router-dom';

function Header({race, onRaceChange}) {

    return (
        <div className="header" >
            <Link id="home-button" to='/' onClick={() => onRaceChange('')}>
                <h1>Races of Middle-Earth</h1>
            </Link>
            
        </div>
    )
}

export default Header;