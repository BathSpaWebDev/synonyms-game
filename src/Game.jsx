import React, { useEffect} from "react";

export default function Game({Words,setWords,Answer,setAnswer}) {

  const getWords = async() => {
    console.log('fetching')
    const response = await fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/words/word_clues/clues_four.json");
    const data = await response.json();

    let answerArray = Object.keys(data.data);
    let optionsArray = Object.values(data.data);
    
    let randomChoice = Math.floor(Math.random()*answerArray.length);

    let Currentanswer = answerArray[randomChoice];
    let Currentoption = optionsArray[randomChoice];
    


    setAnswer(Currentanswer);
    setWords(Currentoption);
  };

  useEffect(() => {
    getWords();
    setAnswer();
  },[])

  return (
    <section class="Inner-game">
      <div>
        <h1 class="text-4xl text-black bg-slate-50 p-12 rounded-xl mt-8">
          The Synonym Game
        </h1>
      </div>
      <div className="Answerfield">
        <input type="text" placeholder="Only 4 letters"/>
        <h1>{Answer}</h1>
      </div>

      <div className="grid"> 
     
      {Words.map((word) => {
      return(
        <div className="synonyms">{word}</div>
      ) 
    })}
      </div>

      <span class="text-4xl mb-8">Score:</span>
    </section>
  );
}


