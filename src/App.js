import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import ErrorBoundary from "./components/ErrorBoundary";
import ScoreCard from "./components/ScoreCard";
import { questions } from './data';
//import SummaryCard from "./components/SummaryCard";

export default function App() {

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

