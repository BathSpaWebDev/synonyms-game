import { useEffect } from "react";

export const Game = ({Words,setWords,Answer,setAnswer}) => {

  const getWords = async() => {
  const response = await fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/words/word_clues/clues_four.json");
  const data = await response.json();

  let answerArray = Object.keys(data.data);
  let optionsArray = Object.values(data.data);
  let randomChoice = Math.floor(Math.random()*answerArray.length);
  let currentAnswer = answerArray[randomChoice];
  let currentOption = optionsArray[randomChoice];

  setAnswer(currentAnswer);
  setWords(currentOption);
  };

  useEffect(() => {
    getWords();
    setAnswer();
  },[])

  return (

    <section className="Inner-game">
      <div>
        <h1 className="text-4xl text-black bg-slate-50 p-12 rounded-xl mt-8">
          The Synonym Game
        </h1>
      </div>
      <div className="Answerfield">
      <input type="text" placeholder="Only 4 letters" maxlength="4" />
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
  )
}
