import React from "react";
import { StartGameButton } from './start-game-button';


export const Home = () => {
  return (
    <div class="body">
      <img
        src="https://i.ibb.co/3rxp9JM/undraw-welcome-cats-thqn-removebg-preview.png"
        alt="undraw-welcome-cats-thqn-removebg-preview"
        border="0"
      />
      <span class="text-2xl text-black items-center">To</span>
      <h1 class="text-4xl text-black bg-slate-50 p-4 mt-4 rounded-xl Welcome-logo">
        The Synonym Game
      </h1>
      <div class="mt-8 p-4 d-flex">

        <StartGameButton />
        <button class="p-4 text-2xl bg-slate-50 text-black rounded-xl ml-8 hover:scale-105 hover:bg-violet-200">
          Rules
        </button>
      </div>
    </div>
  );
}
