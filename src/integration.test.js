import { storeFactory } from '../test/testUtils'
import { guessWord } from './actions'

describe('guessWord action dispatcher', () => {
  const secretWord = 'party'
  const unsuccessfulGuess = 'train'

  describe('no guessed words', () => {
    let store
    const initialState = { secretWord }

    beforeEach(() => {
      store = storeFactory(initialState)
    })
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      }
      expect(newState).toEqual(expectedState)
    })
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: 5
        }]
      }
      expect(newState).toEqual(expectedState)
    })
  })
  describe('some guessed words', () => {
    let store
    const guessedWords = [
      { guessedWord: 'cloud', letterMatchCount: 0 },
      { guessedWord: 'blah', letterMatchCount: 1 },
      { guessedWord: 'play', letterMatchCount: 3 }
    ]
    const initialState = { secretWord, guessedWords }
    beforeEach(() => {
      store = storeFactory(initialState)
    })
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
  })
})