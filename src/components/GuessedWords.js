import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = props => {
  const guessInstructions = <span data-test='guess-instructions'>
    Try to guess the secret word!
  </span>

  return (
    <div data-test='component-guessed-words'>
      { (props.guessedWords.length === 0)
          ? guessInstructions
          : <div data-test='guessed-words'>
              <h3>Guessed Words</h3>
              <table className='table table-sm'>
                <thead className='thead-light'>
                  <tr><th>Guessed word</th><th>Matched letters</th></tr>
                </thead>
                <tbody>
                  {props.guessedWords.map((word, index) => (
                    <tr key={index} data-test='guessed-word'>
                      <td>{word.guessedWord}</td>
                      <td>{word.matchedCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      }
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      matchedCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
