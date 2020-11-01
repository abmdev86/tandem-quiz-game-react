/* eslint-disable react/prop-types */
import React from "react";

const QuestionCard = (props) => {
  return props.firstRound && !props.showScore ? (
       <div>
      <div>
        <div>
          <span>
            Question: {props.currentQ + 1}/{props.round1.length}
          </span>
        </div>
      </div>
      {/* Question label */}
      <div>
        <h2>{props.round1[props.currentQ].question}</h2>
      </div>
      {/* Answers */}
      <div>
        {props.round1[props.currentQ].incorrect.map((incorrect) => {
          let rng = Math.floor(Math.random() * Math.floor(1000));
          return (
            <ul key={rng.toString()}>
              <li>
                <button
                  onClick={(e) => props.submit(e, false)}
                >
                  {incorrect}
                </button>
              </li>
            </ul>
          );
        })}
        <button onClick={(e) => props.submit(e, true)}>
          {props.round1[props.currentQ].correct}
        </button>
      </div>
    </div>
  ) : (
    <div>Round 2</div>
  );
};

export default QuestionCard;
