import GameContext from '../context/GameContext'
import { useContext } from 'react'
function UserGuess() {
  const { setUserGuess, userInputRef, setNextErrorMsg, isGameOver } =
    useContext(GameContext)

  const onSubmit = event => {
    event.preventDefault()
    if (!userInputRef.current.value) {
      setNextErrorMsg('Please enter a guess')
    }
    if (userInputRef.current?.value) {
      setNextErrorMsg('')
      setUserGuess(userInputRef.current.value)
      userInputRef.current.setAttribute('disabled', '')
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="input__group">
        <input ref={userInputRef} className="guess__input" />
        <button
          className="btn submit__btn"
          disabled={isGameOver ? 'disabled' : undefined}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default UserGuess
