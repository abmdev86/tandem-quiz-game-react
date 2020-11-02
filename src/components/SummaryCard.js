import React from 'react'
/* eslint-disable react/prop-types */

export default function SummaryCard(props) {
    return (
      <div>
            <h3>You answered a total of {props.score} out of 21 questions</h3>

            <button onClick={()=>props.restart()}>Restart</button>
      </div>
    );
}
