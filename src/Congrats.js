import React from 'react'

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if success property is false)
 */
export default (props) => {
  return (
    <div data-test='component-congrats'>
      { (props.success)
        ? <div data-test='congrats-message'>
            Congratulations! You guessed the word!
          </div>
        : null
      }

    </div>
  )
}
