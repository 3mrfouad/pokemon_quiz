import GameContext from '../context/GameContext'
import { useContext } from 'react'

const imageMarginStyles = {
  marginTop: '-20px',
  marginBottom: '-100px'
}
function Card() {
  const { card, userGuess } = useContext(GameContext)
  console.log(card?.name)
  return (
    <div className="card__image__container">
      <div className="card__image__inner__container">
        <img
          className="card__image"
          src={card?.images?.small}
          style={userGuess === card?.name ? {} : imageMarginStyles}
        />
      </div>
    </div>
  )
}

export default Card
