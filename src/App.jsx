import './App.css'

import { useContext, useEffect } from 'react'

import Card from './components/Card'
import Celebration from './components/Celebration'
import GameContext from './context/GameContext'
import Next from './components/Next'
import Rest from './components/Rest'
import Rounds from './components/Rounds'
import Score from './components/Score'
import TopScore from './components/TopScore'
import UserGuess from './components/UserGuess'

function App() {
  const {
    loading,
    error,
    setCard,
    cards,
    randomizeIndex,
    isGameOver,
    nextErrorMsg
  } = useContext(GameContext)

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
        <TopScore />
        <Rounds />
      </div>
      <div className="game__container">
        <Celebration />
        <Card />
        <span className="next__error__msg">{nextErrorMsg}</span>
        <div className="game__controls">
          <UserGuess />
          <div>{isGameOver ? <Rest /> : <Next />}</div>
        </div>
      </div>
    </div>
  )
}

export default App
