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
<div className="app">
  <Header/>
  {
    /* Display the score if the user is at end of the quiz else next question*/
    showScore ? (
      <div >
<h3>You scored {score} out of {questions.length}</h3>
<button onClick={handleRestart}>Restart</button>
      </div>
    ) : (
      <div >
      <div >
        <div >
          <h3>{currentQuestion + 1 <=10 ? 'Round 1': 'Round 2'}</h3>
          <span>Question: {currentQuestion +1 }/{questions.length}</span>
        </div>
      </div>
{/* Question label */}
      <div><h2>{questions[currentQuestion].question}</h2></div>
      {/* Answers */}
      <div >{
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
