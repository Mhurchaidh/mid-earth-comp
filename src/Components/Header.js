import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className="header">
            <Link id="home-button" to='/'>
                <h1>Races of Middle-Earth</h1>
            </Link>
            <Link to='/addnew'>Add New</Link>
        </div>
    )
}

export default Header;