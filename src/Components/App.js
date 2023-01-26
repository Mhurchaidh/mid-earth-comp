import { Routes, Route } from "react-router-dom";
import Characters from "../db.json";
import Header from "./Header";
import RaceList from "./RaceList";
import Form from "./Form";
import CharacterHolder from './CharacterHolder';
import CharacterDetails from "./CharacterDetails";
import { useState, useEffect } from "react";

function App() {

  const [charactersArray, setCharactersArray] = useState(Characters.characters)

  useEffect(() => {
    fetch('http://localhost:3000/characters')
    .then(resp => resp.json())
    .then(characters => setCharactersArray(characters))
  }, [])

  const onFormSubmit = (newObj) => {
    setCharactersArray([...charactersArray, newObj])
  }

  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path = '/' element={<RaceList characters={charactersArray}/>}/>
        <Route path='/addnew' element={<Form onFormSubmit={onFormSubmit}/>}/>
        <Route path=':characterRace' element={<CharacterHolder characters={charactersArray}/>}>
          <Route path=':characterName' element={<CharacterDetails characters={charactersArray}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
