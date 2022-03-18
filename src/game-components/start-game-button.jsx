export const StartGameButton = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <button
    class="p-4 text-2xl bg-indigo-50 text-black rounded-xl mr-8  hover:scale-105 hover:bg-violet-200"
    button onClick={refreshPage}>
    Start Game
    </button>
  )
}
