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
  // return props.firstRound && !props.showScore ? (
  //   <div>
  //     <div>
  //       <div>
  //         <span>
  //           Round: 1
  //           Question: {props.currentQ + 1}/{props.round1.length}
  //         </span>
  //       </div>
  //     </div>
  //     {/* Question label */}
  //     <div>
  //       <h2>{props.round1[props.currentQ].question}</h2>
  //     </div>
  //     {/* Answers */}
  //     <div>
  //       {props.round1[props.currentQ].incorrect.map((incorrect) => {
  //         let rng = Math.floor(Math.random() * Math.floor(1000));
  //         return (
  //           <ul key={rng.toString()}>
  //             <li>
  //               <button onClick={(e) => props.submit(e, false)}>
  //                 {incorrect}
  //               </button>
  //             </li>
  //           </ul>
  //         );
  //       })}
  //       <button onClick={(e) => props.submit(e, true)}>
  //         {props.round1[props.currentQ].correct}
  //       </button>
  //     </div>
  //   </div>
  // ) : (
  //   <div>
  //     <div>
  //       <div>
  //         <span>
  //           Round: 2
  //           Question: {props.currentQ + 1}/{props.round2.length}
  //         </span>
  //       </div>
  //     </div>
  //     {/* Question label */}
  //     <div>
  //       <h2>{props.round2[props.currentQ].question}</h2>
  //     </div>
  //     {/* Answers */}
  //     <div>
  //       {props.round2[props.currentQ].incorrect.map((incorrect) => {
  //         let rng = Math.floor(Math.random() * Math.floor(2000));
  //         return (
  //           <ul key={rng.toString()}>
  //             <Fragment>
  //               <li>
  //                 <button onClick={(e) => props.submit(e, false)}>
  //                   {incorrect}
  //                 </button>
  //               </li>
  //             </Fragment>
  //           </ul>
  //         );
  //       })}
  //       <button onClick={(e) => props.submit(e, true)}>
  //         {props.round2[props.currentQ].correct}
  //       </button>
  //     </div>
  //   </div>
  // );
}

