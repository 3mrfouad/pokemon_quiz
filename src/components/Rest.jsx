import GameContext from '../context/GameContext'
import { HIGHEST_SCORE_KEY } from '../utils/constants'
import { useContext } from 'react'
function Rest() {
  const {
    setScore,
    score,
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
    if (localStorage.getItem(HIGHEST_SCORE_KEY) < score)
      localStorage.setItem(HIGHEST_SCORE_KEY, score)
  }

  return (
    <button className="btn next__btn" onClick={onClick}>
      Reset
      <img src="/reset.svg" alt="" />
    </button>
  )
}

export default Rest
