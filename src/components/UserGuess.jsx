import GameContext from '../context/GameContext'
import { useContext } from 'react'

function UserGuess() {
  const { setUserGuess, userInputRef, userGuess } = useContext(GameContext)
  console.log('UserGuess', userGuess)
  const onSubmit = event => {
    event.preventDefault()

    if (userInputRef.current?.value) {
      setUserGuess(userInputRef.current.value)
      userInputRef.current.setAttribute('disabled', '')
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <input ref={userInputRef} className="guess__input" />
      <button className="btn submit__btn">Submit</button>
    </form>
  )
}

export default UserGuess
