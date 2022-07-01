import { useState } from 'react'
import './App.css';
import EndScreen from './Components/EndScreen';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import { QuizContext } from './helper/Context';

function App() {
  const [gamestate, setGameState] = useState('menu')
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ gamestate, setGameState, score, setScore }}>
        {gamestate === "menu" && <MainMenu />}
        {gamestate === "quiz" && <Quiz />}
        {gamestate === "endscreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
