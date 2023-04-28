import React, { createContext } from 'react'

const initialValue = {
  score: 0,
  setScore: () => {},

  round: 1,
  setRound: () => {},

  card: null,
  setCard: () => {},

  userGuess: '',
  setUserGuess: () => {},

  userInputRef: null,

  randomizeIndex: () => {},

  nextErrorMsg: '',
  setNextErrorMsg: () => {},

  isGameOver: false,
  setIsGameOver: () => {}
}
const GameContext = createContext(initialValue)

export default GameContext
