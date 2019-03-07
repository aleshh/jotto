import { getLetterMatchCount } from './helpers'

describe('getLetterMatchCount', () => {
  const secretWord = 'party'
  test('returns correct count when no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord)
    expect(letterMatchCount).toBe(0)
  })
  test('returns correct match count when there are matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord)
    expect(letterMatchCount).toBe(3)
  })
  test('returns correct count when there are duplicate letters in a guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord)
    expect(letterMatchCount).toBe(3)
  })
})