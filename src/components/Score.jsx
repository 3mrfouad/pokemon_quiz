import { useContext, useEffect } from 'react'

import GameContext from '../context/GameContext'

function Score() {
  const { score, setScore, userGuess, card, round } = useContext(GameContext)
  useEffect(() => {
    if (userGuess?.toLowerCase() === card?.name?.toLowerCase())
      setScore(prevScore => prevScore + 1)
  }, [userGuess])

  return (
    <>
      <p>Score: {score}</p>
      {round === 5 &&
        (score >= 3 ? <p>Congratulations!</p> : <p>Hard luck!</p>)}
    </>
  )
}

export default Score
