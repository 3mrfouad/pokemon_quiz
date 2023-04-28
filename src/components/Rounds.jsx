import GameContext from '../context/GameContext'
import { NO_OF_ROUNDS } from '../utils/constants'
import { useContext } from 'react'

function Rounds() {
  const { round } = useContext(GameContext)
  return (
    <p>
      Rounds: {round}/ {NO_OF_ROUNDS}{' '}
    </p>
  )
}

export default Rounds
