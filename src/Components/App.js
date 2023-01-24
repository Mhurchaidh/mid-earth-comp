//import './App.css';
//import { Switch, Route } from "react-router-dom";
import Characters from "../db.json";
import Header from "./Header";
import RaceList from "./RaceList";

function App() {
  return (
    <div className="App">
      <Header />
      <RaceList characters={Characters}/>
    </div>
  );
}

export default App;
