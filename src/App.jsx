import './App.css'

import Card from './components/Card'
import GameProvider from './context/GameProvider'
import Next from './components/Next'
import Rounds from './components/Rounds'
import Score from './components/Score'
import UserGuess from './components/UserGuess'

function App() {
  return (
    <GameProvider>
      <div className="app__container">
        <h1>Pokemon Quiz</h1>
        <div className="score__container">
          <Score />
          <Rounds />
        </div>
        <div className="game__container">
          <div className="left__col">
            <Card />
            <UserGuess />
          </div>
          <div className="right__col">
            <Next />
          </div>
        </div>
      </div>
    </GameProvider>
  )
}

export default App
