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
