import { useContext, useEffect } from 'react'

import GameContext from '../context/GameContext'
import useGuessResult from '../hooks/useGuessResult'

function Score() {
  const { score, setScore, userGuess } = useContext(GameContext)
  const isWrongGuess = useGuessResult()

  useEffect(() => {
    if (!isWrongGuess) setScore(prevScore => prevScore + 1)
  }, [userGuess])

  return (
    <div>
      <p className="score__label">Score</p>
      <p>{score}</p>
    </div>
  )
}

export default Score
