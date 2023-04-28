import GameContext from '../context/GameContext'
import { NO_OF_ROUNDS } from '../utils/constants'
import { useContext } from 'react'
function Next() {
  const {
    setRound,
    round,
    userInputRef,
    cards,
    setCard,
    setUserGuess,
    userGuess,
    randomizeIndex,
    setNextErrorMsg,
    setIsGameOver
  } = useContext(GameContext)

  const onNext = () => {
    if (!userInputRef.current.value || !userGuess) {
      if (!userInputRef.current.value) {
        setNextErrorMsg('Please enter a guess')
      } else if (!userGuess) {
        setNextErrorMsg('Please submit your guess')
      }
      return
    }

    if (round < NO_OF_ROUNDS) {
      setRound(prevRound => prevRound + 1)
      userInputRef.current.value = ''
      setUserGuess('')
      setNextErrorMsg('')
      userInputRef.current.removeAttribute('disabled')
      const randomIndex = randomizeIndex()
      if (cards?.length) setCard(cards[randomIndex])
    } else {
      setIsGameOver(true)
      return
    }
  }
  return (
    <button className="btn next__btn" onClick={onNext}>
      <img src="/next_arrow.svg" alt="" />
    </button>
  )
}

export default Next
