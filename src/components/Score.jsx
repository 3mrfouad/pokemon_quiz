import { useContext, useEffect } from 'react'

import GameContext from '../context/GameContext'
import { NO_OF_ROUNDS } from '../utils/constants'

function Score() {
  const { score, setScore, userGuess, card, isGameOver } =
    useContext(GameContext)

  const isWinner = score >= NO_OF_ROUNDS / 2
  useEffect(() => {
    if (userGuess?.toLowerCase() === card?.name?.toLowerCase())
      setScore(prevScore => prevScore + 1)
  }, [userGuess])

  return (
    <>
      <p>Score: {score}</p>
      {isGameOver ? (
        isWinner ? (
          <p>Congratulations!</p>
        ) : (
          <p>Hard luck!</p>
        )
      ) : null}
    </>
  )
}

export default Score
