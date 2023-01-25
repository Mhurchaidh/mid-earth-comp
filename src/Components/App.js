//import './App.css';
import { Routes, Route } from "react-router-dom";
import Characters from "../db.json";
import Header from "./Header";
import RaceList from "./RaceList";
import Form from "./Form";
import Search from "./Search";
import CharacterHolder from './CharacterHolder';
import { useState, useEffect } from "react";

function App() {

  const [charactersArray, setCharactersArray] = useState(Characters.characters)
  const [searchTerm, setSearchTerm] = useState("")

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
        <Route exact path = '/' element={<RaceList characters={charactersArray} searchTerm={searchTerm}/>}/>
        <Route path='/addnew' element={<Form onFormSubmit={onFormSubmit}/>}/>
        <Route path='/men' element={<CharacterHolder race={"Men"} characters={charactersArray}/>}/>
        <Route path='/elves' element={<CharacterHolder race={"Elves"} characters={charactersArray}/>}/>
        <Route path='/maiar' element={<CharacterHolder race={"Maiar"} characters={charactersArray}/>}/>
        <Route path='/dwarves' element={<CharacterHolder race={"Dwarves"} characters={charactersArray}/>}/>
        <Route path='/orc-kind' element={<CharacterHolder race={"Orcs"} characters={charactersArray}/>}/>
      </Routes>
    </div>
  );
}

export default App;
