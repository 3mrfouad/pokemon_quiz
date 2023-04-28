import { useContext, useEffect } from 'react'

import GameContext from '../context/GameContext'

function Score() {
  const { score, setScore, userGuess, card } = useContext(GameContext)
  useEffect(() => {
    if (userGuess?.toLowerCase() === card?.name?.toLowerCase())
      setScore(prevScore => prevScore + 1)
  }, [userGuess])

  return (
    <div>
      <p className="score__label">Score</p>
      <p>{score}</p>
    </div>
  )
}

export default Score
