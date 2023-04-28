import GameContext from '../context/GameContext'
import { NO_OF_ROUNDS } from '../utils/constants'
import { useContext } from 'react'

function Rounds() {
  const { round } = useContext(GameContext)
  return (
    <div>
      <p className="score__label">Round</p>
      <p>
        {round}/ {NO_OF_ROUNDS}
      </p>
    </div>
  )
}

export default Rounds
