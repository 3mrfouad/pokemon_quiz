function UserGuess() {
  const onSubmit = event => {
    event.preventDefault()
  }
  return (
    <form>
      <input className="guess__input" />
      <button className="btn submit__btn" onClick={onSubmit}>
        Submit
      </button>
    </form>
  )
}

export default UserGuess
