import React, { useContext } from 'react'

import GameContext from '../context/GameContext'

function Card() {
  const { card } = useContext(GameContext)
  return (
    <>
      {/* <img src={src} alt={alt} /> */}
      <img className="card__image" src="/placeholder.png" alt="" />
    </>
  )
}

export default Card
