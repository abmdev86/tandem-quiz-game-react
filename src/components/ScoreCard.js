/* eslint-disable react/prop-types */
import React from 'react'

/**
   * restarts the state of the component
   */

const ScoreCard = (props) => {
   console.log(props.isRound1)
   if (props.isRound1)
   {
        return (
          <div>
            <h3>
              You scored {props.score} out of {props.questions.length - 1}
            </h3>
            <button onClick={(e) => props.startRound(e)}>Next Round</button>
          </div>
        );
   } else {
      return (
        <div>
          <h3>
            You scored {props.score - 10} out of {props.questions.length}
          </h3>
          <button onClick={(e) => props.startRound(e)}>Next Round</button>
        </div>
      );
      }

}

export default ScoreCard
