import { HIGHEST_SCORE_KEY } from '../utils/constants'
function TopScore() {
  const topScore = localStorage.getItem(HIGHEST_SCORE_KEY)
  return (
    <div>
      <p className="score__label highest__score">Top Score</p>
      <p>{topScore}</p>
    </div>
  )
}

export default TopScore
