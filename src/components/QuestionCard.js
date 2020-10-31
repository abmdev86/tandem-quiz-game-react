/* eslint-disable react/prop-types */
import React from 'react'

const QuestionCard = (props) => {
  return (<div >
        <div >
          <div >
            <h3>{props.question + 1 <= 10 ? 'Round 1' : 'Round 2'}</h3>
            <span>Question: {props.question + 1 }/{props.questions.length}</span>
          </div>
        </div>
  {/* Question label */}
        <div><h2>{props.questions[props.question].question}</h2></div>
        {/* Answers */}
        <div >{
          props.questions[props.question].incorrect.map(incorrect => (
          <button key={incorrect.id} onClick={() => props.submit(false)}>{incorrect}</button>
          ))
          }
          <button onClick={() => props.submit(true)}>{props.questions[props.question].correct}</button>
      </div>

        </div>)
}

export default QuestionCard
