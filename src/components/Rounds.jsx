import { NO_OF_ROUNDS } from '../utils/constants'
import React from 'react'
function Rounds() {
  // TODO: import the rounds from app context, and add it to the component
  const { rounds } = {}
  return (
    <p>
      Rounds: ${rounds}/ ${NO_OF_ROUNDS}
    </p>
  )
}

export default Rounds
