import React, { useContext } from 'react'

import GameContext from '../context/GameContext'

function Score() {
  const { score } = useContext(GameContext)
  return <p>Score: {score}</p>
}

export default Score
