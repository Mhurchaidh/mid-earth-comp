import Search from "./Search";
import Form from "./Form";

function Header() {
    return (
        <div id="home-button">
            <h1>Races of Middle-Earth</h1>
            <Search />
            <Form />
        </div>
    )
}

export default Header;