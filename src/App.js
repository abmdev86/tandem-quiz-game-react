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
    },
    {
      questionText: "What is 1010 in Decimal?",
      answers: [
        {
          answerText: "10",
          isCorrect: true,
        },
        {
          answerText: "1100",
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

