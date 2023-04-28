import GameContext from '../context/GameContext'
import { useContext } from 'react'

function useGuessResult() {
  const { card, userGuess } = useContext(GameContext)

  return userGuess?.toLowerCase() !== card?.name?.toLowerCase()
}

export default useGuessResult
