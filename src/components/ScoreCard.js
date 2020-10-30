/* eslint-disable react/prop-types */
import React from 'react'

/**
   * restarts the state of the component
   */

const ScoreCard = (props) => {
  return (
        <div >
            <h3>You scored {props.score} out of {props.questions.length}</h3>
            <button onClick={props.restart}>Restart</button>
        </div>
  )
}

export default ScoreCard
