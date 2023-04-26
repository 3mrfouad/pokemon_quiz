import React from 'react'

function UserGuess() {
  const onSubmit = event => {
    event.preventDefault()
  }
  return (
    <form>
      <input />
      <button onClick={onSubmit}>Submit</button>
    </form>
  )
}

export default UserGuess
