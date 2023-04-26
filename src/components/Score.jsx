import GameContext from '../context/GameContext'
import { useContext } from 'react'

function Score() {
  const { score } = useContext(GameContext)
  return <p>Score: {score}</p>
}

export default Score
