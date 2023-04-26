import React, { createContext } from 'react'

const initialValue = {
  score: 0,
  setScore: () => {},

  round: 1,
  setRound: () => {},

  card: null,
  setCard: () => {},

  userGuess: '',
  setUserGuess: () => {}
}
const GameContext = createContext(initialValue)

export default GameContext
