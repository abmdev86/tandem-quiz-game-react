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
  //  if (props.isRound1)
  //  {
  //       return (
  //         <div>
  //           <h3>
  //             You scored {props.score} out of {props.questions.length - 1}
  //           </h3>
  //           <button onClick={(e) => props.startRound(e)}>Next Round</button>
  //         </div>
  //       );
  //  } else {
  //     return (
  //       <div>
  //         <h3>
  //           You scored {props.score > 11 ?  props.score - 10: props.score} out of {props.questions.length}
  //         </h3>
  //         <button onClick={() => props.gameOver()}>End</button>
  //       </div>
  //     );
  //     }

}


