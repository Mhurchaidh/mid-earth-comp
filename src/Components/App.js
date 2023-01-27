import { Routes, Route } from "react-router-dom";
import Characters from "../db.json";
import Header from "./Header";
import RaceList from "./RaceList";
import Form from "./Form";
import CharacterHolder from './CharacterHolder';
import CharacterDetails from "./CharacterDetails";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {

  const [charactersArray, setCharactersArray] = useState(Characters.characters)
  const [currentRace, setCurrentRace] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/characters')
    .then(resp => resp.json())
    .then(characters => setCharactersArray(characters))
  }, [])

  const onFormSubmit = (newObj) => {
    setCharactersArray([...charactersArray, newObj])
  }

  const onRaceChange = (race) => {
    setCurrentRace(race);
  }

  return (

    <div className={`App ${currentRace}-page`}>
      <Header onRaceChange={onRaceChange}/>
      <Routes>
        <Route path = '/' element={
        <div>
          <Link className='addNew' to='/addnew' onClick={() => onRaceChange('new')}><h3>Add New Character</h3></Link>
          <RaceList characters={charactersArray} onRaceChange={onRaceChange}/>
        </div>}/>
        <Route path='/addnew' element={<Form onFormSubmit={onFormSubmit}/>}/>
        <Route path=':characterRace' element={<CharacterHolder characters={charactersArray} onRaceChange={onRaceChange}/>}>
          <Route path=':characterName' element={<CharacterDetails characters={charactersArray}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
