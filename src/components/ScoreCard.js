/* eslint-disable react/prop-types */
import React from 'react';

/**
   * restarts the state of the component
   */

export default function ScoreCard(props) {

  return (
    <div className="score-card">
      <div>
        You scored: {props.score} out of {props.questions.length}
      </div>
    </div>
  );


}


