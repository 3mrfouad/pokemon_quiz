import GameContext from '../context/GameContext'
import { NO_OF_ROUNDS } from '../utils/constants'
import random from 'lodash.random'
import { useContext } from 'react'
function Next() {
  const { setRound, round, userInputRef, cards, setCard, userGuess } =
    useContext(GameContext)

  const onNext = () => {
    if (!userGuess) return
    if (round < NO_OF_ROUNDS) {
      setRound(prevRound => prevRound + 1)
      userInputRef.current.value = ''
      userInputRef.current.removeAttribute('disabled')
      const randomIndex = random(0, cards?.length - 1)
      if (cards?.length) setCard(cards[randomIndex])
    }
  }
  return (
    <button className="btn next__btn" onClick={onNext}>
      <img src="/next_arrow.svg" alt="" />
    </button>
  )
}

export default Next
