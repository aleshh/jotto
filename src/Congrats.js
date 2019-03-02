import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if success property is false)
 */
const Congrats = (props) => {
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

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats