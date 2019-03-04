import { actionTypes } from '../actions/index'
import successReducer from './successReducer'

test('returns default initial stateo fo `false` when no action is passed', () => {
  const newState = successReducer(undefined, {})
  expect(newState).toBe(false)
})
test('returns state of true when action of type `CORRECT_GUESS` is passed', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS})
  expect (newState).toBe(true)
})