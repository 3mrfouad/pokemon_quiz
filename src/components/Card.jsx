import GameContext from '../context/GameContext'
import { useContext } from 'react'

function Card() {
  const { card, userGuess } = useContext(GameContext)
  console.log(card?.name)
  return (
    <div className="card__image__container">
      {userGuess !== card?.name && <div className="card__name__mask" />}
      <img className="card__image" src={card?.images?.small} />
    </div>
  )
}

export default Card
