import React, { useState } from 'react'
import Header from './components/Header'
import ScoreCard from './components/ScoreCard'
import QuestionCard from './components/QuestionCard'
const questions = require('./data/Apprentice_TandemFor400_Data.json')
function App () {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  /**
   * Checks if answer clicked was correct and displays next question.
   * @param {bool} isCorrect
   *
   */
  const handleSubmitAnswer = (isCorrect) => {
    // e.preventDefault()

    if (isCorrect) {
      setScore(score + 1)
      alert('correct!')
    } else {
      alert('Incorrect')
    }
    setTimeout(() => changeQuestion(), 1000)
  }
  function changeQuestion () {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }
  /**
   * restarts the state of the component
   */
  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
<div className="app">
<Header/>
  {
    /* Display the score if the user is at end of the quiz else next question */
    showScore
      ? (<ScoreCard score={score} questions={questions} restart={handleRestart} />)
      : (<QuestionCard question={currentQuestion} questions={questions} submit={handleSubmitAnswer} />)
  }

</div>

  )
}

export default App
