import React, { useEffect, useState } from 'react';
import './App.css';
import { QuestionType, Quiz } from './Types/quiz_type';
import QuestionCard from './components/QuestionCard';
import { getQuizDetails } from './services/quiz_service'

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [questionNumber, setQuestionNumber] = useState(0)
  let [score, setScore] = useState(0);
  let [showResult, setShowResult] = useState(false);
  let [gameOver, setGameOver] = useState(false);
  
  const TOTAL_QUESTIONS:number = 3;



  const startTrivia = async () => {
    
    setShowResult(false);
    setGameOver(false);
    const newQuestions = await getQuizDetails(
      TOTAL_QUESTIONS,
      "easy"
    );
    setQuiz(newQuestions);
    setScore(0);
    setQuestionNumber(0);
  
  };
  
  
  useEffect(() => {
    startTrivia();

  }, []);

   const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    console.log(quiz.length);
    e.preventDefault();

    const CurrentQuestion: QuestionType = quiz[questionNumber];

    
    if (userAns === CurrentQuestion.correct_answer) {
      setScore(++score);

    }
    
    if (questionNumber !== quiz.length - 1)
      setQuestionNumber(++questionNumber);
    else
      
      setShowResult(true);


  }

  if (!quiz.length)
    return (<h1>Loading ....</h1>)
  if (showResult) {
    return (
      <div className="question-container result-container" >
        <h1>Quiz Result</h1>
        <p>Your score is {score} out of {quiz.length} </p>
        <button className='restart' onClick={startTrivia}>Restart</button>
      </div>
    )

  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuestionCard
        options={quiz[questionNumber].option}
        question={quiz[questionNumber].question}
        callback={handleSubmit}
      />

    </div>
  );
}

export default App;






