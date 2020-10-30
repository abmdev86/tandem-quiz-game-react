import React, { useState } from 'react'; 
import Header from './components/Header';
const questions = require('./data/Apprentice_TandemFor400_Data.json');
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  /**
   * Checks if answer clicked was correct and displays next question.
   * @param {bool} isCorrect 
   * 
   */
  const handleSubmitAnswer = (isCorrect) =>{
    if(isCorrect){
     setScore(score + 1);
     console.log(`score ${score}`);
    }
    const nextQuestion =  currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  }
  /**
   * restarts the state of the component
   */
 const handleRestart = ()=>{
   setCurrentQuestion(0);
   setScore(0);
   setShowScore(false);

 }
  return (
<div className="App">
  <Header/>
  {
    /* Display the score if the user is at end of the quiz else next question*/
    showScore ? (
      <div className='score-div'>
<h3>You scored {score} out of {questions.length}</h3>
<button onClick={handleRestart}>Restart</button>
      </div>
    ) : (
      <div className="question-section">
      <div className="question-div">
        <div className="question-count">
          <h3 className="round-count">{currentQuestion + 1 <=10 ? 'Round 1': 'Round 2'}</h3>
          <span>Question: {currentQuestion +1 }</span>/{questions.length}
        </div>
      </div>
{/* Question label */}
      <div className="question-text">{questions[currentQuestion].question}</div>
      {/* Answers */}
      <div className="answer-div">{
        questions[currentQuestion].incorrect.map(incorrect =>(
        <button onClick={()=>handleSubmitAnswer(false)}>{incorrect}</button>
        ))
        }
        <button onClick={()=>handleSubmitAnswer(true)}>{questions[currentQuestion].correct}</button>
    </div>

      </div>
    )
  }

</div>
  );
}

export default App;
