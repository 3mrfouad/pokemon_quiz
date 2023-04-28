import range from 'lodash.range'
import sample from 'lodash.sample'

export const getRandomNumber = len => {
  let remainingIndices = range(0, len)
  return () => {
    const index = sample(remainingIndices)
    remainingIndices = remainingIndices.filter(ele => ele !== index)
    return index
  }
}
