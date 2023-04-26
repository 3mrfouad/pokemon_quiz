import './App.css'

import Card from './components/Card'
import GameContext from './context/GameContext'
import Next from './components/Next'
import Rounds from './components/Rounds'
import Score from './components/Score'
import UserGuess from './components/UserGuess'
import { useContext } from 'react'

function App() {
  const { loading } = useContext(GameContext)
  if (loading) return <div>Loading ...</div>
  return (
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
  )
}

export default App
