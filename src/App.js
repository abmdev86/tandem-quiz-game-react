import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import ErrorBoundary from "./components/ErrorBoundary";
import ScoreCard from "./components/ScoreCard";
//import SummaryCard from "./components/SummaryCard";

export default function App() {
  /**
   * An array of question objects which contain a questionText that holds the questions to display
   * and an answers array with answer objects
   * these answer objects contain answerText that holds the answer to be displayed and a bool isCorrect.
   *
   */
  const questions = [
    {
      questionText: "What is Binary?",
      answers: [
        {
          answerText: "a Base2 system",
          isCorrect: true,
        },
        {
          answerText: "A base-10 system",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What is the Decimal system?",
      answers: [
        {
          answerText: "a Base2 system",
          isCorrect: false,
        },
        {
          answerText: "A base-10 system",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "What is Hexadecimal?",
      answers: [
        {
          answerText: "a base-16 system",
          isCorrect: true,
        },
        {
          answerText: "A base-10 system",
          isCorrect: false,
        },
      ],
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {

      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <ErrorBoundary>

      { !showScore ? (<QuestionCard score={score} questions={questions} showScore={showScore} currentQuestion={currentQuestion}
        handleAnswerOptionClick={handleAnswerOptionClick} />) : (
        <ScoreCard score={score} questions={questions} />
      )}
    </ErrorBoundary>
  );


}

// const questions = require("./data/Apprentice_TandemFor400_Data.json");
// const roundOneQuestions = questions.slice(0, 10);
// const roundTwoQuestions = questions.slice(10, 21);

// class App extends React.Component {
//   constructor() {
//     super();
//     this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
//     this.changeQuestion = this.changeQuestion.bind(this);
//     this.state = {
//       currentQuestion: 0,
//       score: 0,
//       showScore: false,
//       round1Questions: roundOneQuestions,
//       round2Questions: roundTwoQuestions,
//       round1: true,
//       endGame: false
//     };
//   }
// /**
//  * Checks if answer is correct and updates score
//  * @param {Event} e
//  * @param {bool} isCorrect
//  */
//   handleSubmitAnswer = (e, isCorrect) => {
//     if (isCorrect) {
//       e.target.className = "correct";
//       this.setState((prevState) => ({
//         score: prevState.score + 1,
//       }));
//     } else {
//       e.target.className = "incorrect";
//     }
//     if (this.state.round1) {
//       setTimeout(() => this.changeQuestion(e, this.state.round1Questions), 500);
//     } else {
//       setTimeout(() => this.changeQuestion(e, this.state.round2Questions), 500);

//     }
//   };
// /**
//  * Advances the questions per array length displays ScoreCard when at end of array
//  * @param {Event} e
//  * @param {array} roundQuestions
//  */
//   changeQuestion = (e, roundQuestions) => {
//     e.target.className = ' ';
//     if (this.state.currentQuestion < roundQuestions.length - 1) {
//       this.setState((prevState) => ({
//         currentQuestion: prevState.currentQuestion + 1,
//       }));
//     } else {
//       this.setState(() => ({
//         showScore: true,
//       }));
//     }
//   };
//   /**
//    * Advances to the next round
//    * @param {Event} e
//    */
//   nextRound = (e) => {
//     this.changeQuestion(e, this.state.round2Questions);
//     this.setState({
//       currentQuestion: 0,
//       showScore: false,
//       round1: false,
//     });
//   }
//   /**
//    * Sets game end to true to display SummaryCard
//    */
//   handleEndGame = () => {
//     console.log('hello from endgame')

//     this.setState({
//       endGame: true
//     });
//   }
// /**
//  * Restarts the quiz
//  */
//   restartGame = () => {
//     this.setState({
//       currentQuestion: 0,
//       score: 0,
//       showScore: false,
//       round1Questions: roundOneQuestions,
//       round2Questions: roundTwoQuestions,
//       round1: true,
//       endGame: false,
//     });
//   }

//   render() {
//     if (!this.state.showScore) {
//       return (
//         <ErrorBoundary>
//           <QuestionCard
//             round1={this.state.round1Questions}
//             round2={this.state.round2Questions}
//             firstRound={this.state.round1}
//             showScore={this.state.showScore}
//             currentQ={this.state.currentQuestion}
//             submit={this.handleSubmitAnswer}
//           />
//         </ErrorBoundary>
//       );
//     } else if (this.state.endGame) {
//       return <SummaryCard score={this.state.score} restart={this.restartGame}/>
//     } else {
//       return this.round1 ? (
//         <ErrorBoundary>
//           <ScoreCard
//             score={this.state.score}
//             questions={this.state.round1Questions}
//             startRound={this.nextRound}
//           />
//         </ErrorBoundary>
//       ) : (
//         <ErrorBoundary>
//           <ScoreCard
//             score={this.state.score}
//             questions={this.state.round2Questions}
//               startRound={this.nextRound}
//               isRound1={this.state.round1}
//               gameOver={this.handleEndGame}
//           />
//         </ErrorBoundary>
//       );
//     }
//   }
// }

// export default App;
