import React, { useRef, useState } from 'react'

import GameContext from './GameContext'
import useFetch from '../hooks/useFetch'

const resource =
  'https://api.pokemontcg.io/v2/cards?nationalPokedexNumbers:[1 TO 151]&&pageSize=20'
const options = {
  headers: { 'X-Api-Key': import.meta.env.VITE_API_KEY }
}

const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [card, setCard] = useState(null)
  const [userGuess, setUserGuess] = useState('')
  const userInputRef = useRef(null)

  const { data: cards, error, loading } = useFetch(resource, options)

  const value = {
    score,
    setScore,
    round,
    setRound,
    card,
    setCard,
    userGuess,
    setUserGuess,
    cards,
    error,
    loading,
    userInputRef
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export default GameProvider
