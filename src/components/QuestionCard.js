/* eslint-disable react/prop-types */
//import React, { Fragment } from "react";
import React from "react";
import ID from '../Utils/helpers';
import { sha256 } from 'js-sha256';


export default function QuestionCard(props) {

  return (
    <div className="question-card">
      {props.showCard ? (
        <div className="score-section">
          You scored {props.score} out of {props.questions.length}
        </div>
      ) : (
        <div className="question-display">
          <div className="question-counter">

            <span>Current Question:{props.currentQuestion + 1}</span>/{props.questions.length}
          </div>
          <div className="question-section">
            {props.questions[props.currentQuestion].questionText}
          </div>
          <div className="answer-section">
            {props.questions[props.currentQuestion].answers.map((answer) => (
              <button onClick={() => props.handleAnswerOptionClick(answer.isCorrect)} key={sha256(ID())}>{answer.answerText}</button>
            ))}
          </div>
        </div>

      )}
    </div>
  );

}

