import GameContext from '../context/GameContext'
import { useContext } from 'react'
import useGuessResult from '../hooks/useGuessResult'

function Card() {
  const { card } = useContext(GameContext)
  const isWrongGuess = useGuessResult()
  console.log(card?.name)
  return (
    <div className="card__image__container">
      {isWrongGuess && <div className="card__name__mask" />}
      <img className="card__image" src={card?.images?.small} />
    </div>
  )
}

export default Card
