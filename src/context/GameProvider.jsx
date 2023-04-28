import { useCallback, useEffect, useRef, useState } from 'react'

import GameContext from './GameContext'
import { NO_OF_ROUNDS } from '../utils/constants'
import { getRandomNumber } from '../utils/helpers'
import useFetch from '../hooks/useFetch'

const resource = 'https://api.pokemontcg.io/v2/cards'
const options = {
  headers: { 'X-Api-Key': import.meta.env.VITE_API_KEY }
}

// eslint-disable-next-line react/prop-types
const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [card, setCard] = useState(null)
  const [userGuess, setUserGuess] = useState('')
  const [nextErrorMsg, setNextErrorMsg] = useState('')
  const [isGameOver, setIsGameOver] = useState(false)
  const userInputRef = useRef(null)
  const pageSize = 10

  const queryParams = `?pageSize=${pageSize}&page=${getRandomNumber(100)()}`

  const {
    data: cards,
    error,
    loading
  } = useFetch(`${resource}${queryParams}`, options)

  // useFetch('https://api.pokemontcg.io/v2/cards/gym2-1', options)

  const resetIndices = round === NO_OF_ROUNDS

  useEffect(() => {
    setIsGameOver(round > NO_OF_ROUNDS)
  }, [round])

  const randomizeIndex = useCallback(getRandomNumber(cards?.length), [
    cards?.length,
    resetIndices
  ])

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
    userInputRef,
    randomizeIndex,
    nextErrorMsg,
    setNextErrorMsg,
    isGameOver,
    setIsGameOver
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export default GameProvider
