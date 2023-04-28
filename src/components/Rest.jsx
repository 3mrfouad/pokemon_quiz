import GameContext from '../context/GameContext'
import { useContext } from 'react'

function Rest() {
  const {
    setScore,
    setRound,
    userInputRef,
    setUserGuess,
    setNextErrorMsg,
    randomizeIndex,
    setCard,
    cards
  } = useContext(GameContext)

  const onClick = () => {
    setRound(1)
    setScore(0)
    userInputRef.current.value = ''
    setUserGuess('')
    setNextErrorMsg('')
    userInputRef.current.removeAttribute('disabled')
    const randomIndex = randomizeIndex()
    if (cards?.length) setCard(cards[randomIndex])
  }

  return (
    <button className="btn next__btn" onClick={onClick}>
      <img src="/reset.svg" alt="" />
    </button>
  )
}

export default Rest
