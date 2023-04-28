import GameContext from '../context/GameContext'
import { NO_OF_ROUNDS } from '../utils/constants'
import { useContext } from 'react'

function Celebration() {
  const { score, isGameOver } = useContext(GameContext)

  const isWinner = score >= NO_OF_ROUNDS / 2

  return (
    <div className="celebration__container">
      {isGameOver ? (
        isWinner ? (
          <p>🎉 Congratulations 🎉</p>
        ) : (
          <p>😭 Hard luck! 😭</p>
        )
      ) : null}
    </div>
  )
}

export default Celebration
