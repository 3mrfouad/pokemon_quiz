import React, { useState } from 'react'

import GameContext from './GameContext'

const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [card, setCard] = useState(null)
  const [userGuess, setUserGuess] = useState('')

  const value = {
    score,
    setScore,
    round,
    setRound,
    card,
    setCard,
    userGuess,
    setUserGuess
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export default GameProvider
