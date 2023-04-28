import GameContext from '../context/GameContext'
import { useContext } from 'react'
function UserGuess() {
  const { setUserGuess, userInputRef, nextErrorMsg } = useContext(GameContext)

  const onSubmit = event => {
    event.preventDefault()

    if (userInputRef.current?.value) {
      setUserGuess(userInputRef.current.value)
      userInputRef.current.setAttribute('disabled', '')
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <span className="next__error__msg">{nextErrorMsg}</span>
      <input ref={userInputRef} className="guess__input" />
      <button className="btn submit__btn">Submit</button>
    </form>
  )
}

export default UserGuess
