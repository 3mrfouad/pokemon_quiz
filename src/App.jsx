import './App.css'

import { useContext, useEffect } from 'react'

import Card from './components/Card'
import GameContext from './context/GameContext'
import Next from './components/Next'
import Rest from './components/Rest'
import Rounds from './components/Rounds'
import Score from './components/Score'
import UserGuess from './components/UserGuess'

function App() {
  const { loading, error, setCard, cards, randomizeIndex, isGameOver } =
    useContext(GameContext)

  useEffect(() => {
    const randomIndex = randomizeIndex()
    if (cards?.length) setCard(cards[randomIndex])
  }, [loading])

  if (error)
    return (
      <div className="app__error">
        <p>Something went wrong, try again shortly</p>
        <p>{error}</p>
      </div>
    )

  if (loading) return <p>Loading ...</p>

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
        <div className="right__col">{isGameOver ? <Rest /> : <Next />}</div>
      </div>
    </div>
  )
}

export default App
