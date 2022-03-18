import { useState } from "react";
import './App.css';
import { Game } from './game-components/Game';
import { Home }  from './game-components/Home';
import { SandTimer } from './timer-components/sand-timer';

function App() {

const [Words, setWords] = useState([]);
const [Answer, setAnswer] = useState('')
  return (
    <div className="App-background">
      <Home />
      <div class = "flex justify-around items-center">
        <SandTimer />
        <Game Words={Words} setWords={setWords} Answer={Answer} setAnswer = {setAnswer}/>
      </div>
import "./App.css";
// import Home
//  from "./Home";
import Game from "./Game";
import { useState } from "react";

function App() {
  
const [Words, setWords] = useState([]);
const [Answer, setAnswer] = useState('')
  return (
    
    <div className="App-background">
     {/* <Home/> */}
     <Game Words={Words} setWords={setWords} Answer={Answer} setAnswer = {setAnswer}/>
    </div>
  );
}

export default App;