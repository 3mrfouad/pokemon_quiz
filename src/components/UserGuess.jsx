import GameContext from '../context/GameContext'
import { useContext } from 'react'
import useGuessResult from '../hooks/useGuessResult'
function UserGuess() {
  const { setUserGuess, userInputRef, setNextErrorMsg, isGameOver } =
    useContext(GameContext)
  const isWrongGuess = useGuessResult()

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
        <input
          ref={userInputRef}
          className={`guess__input ${
            isWrongGuess ? 'wrong__guess' : 'right__guess'
          }`}
        />
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
