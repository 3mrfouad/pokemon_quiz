import React, { useState } from 'react'

import GameContext from './GameContext'
import useFetch from '../hooks/useFetch'

const resource =
  'https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:1&orderBy=random'
const options = {
  headers: { 'X-Api-Key': import.meta.env.VITE_API_KEY }
}

const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [card, setCard] = useState(null)
  const [userGuess, setUserGuess] = useState('')

  const { data, error, loading } = useFetch(resource, options)

  const value = {
    score,
    setScore,
    round,
    setRound,
    card,
    setCard,
    userGuess,
    setUserGuess,
    data,
    error,
    loading
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export default GameProvider
