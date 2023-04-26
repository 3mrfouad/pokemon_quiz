import GameContext from '../context/GameContext'
import { useContext } from 'react'

function Card() {
  const { card } = useContext(GameContext)
  console.log('Card', card?.name)
  return (
    <div className="card__image__container">
      <img className="card__image" src={card?.images?.small} />
    </div>
  )
}

export default Card
