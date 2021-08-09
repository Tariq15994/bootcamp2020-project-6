import React, { useEffect, useState } from 'react';
import './App.css';
import {QuestionType } from './Types/quiz_type';
import QuestionCard from './components/QuestionCard';
import { getQuizDetails } from './services/quiz_service'

function App() {
  let [quiz , setQuiz ] = useState<QuestionType[]>([])
  let [currentQuestion , setCurrentQuestion ] = useState(0)

  useEffect(() => {
    
      async function fetchData(){
        const questions:QuestionType[] = await getQuizDetails(5,"easy");
        console.log(questions); 
        setQuiz(questions);
      }
      fetchData();
    
  }, []);
  const handleSubmit = (e:React.FormEvent<EventTarget>)=>{
    e.preventDefault();
    if (currentQuestion !== quiz.length-1 )
      setCurrentQuestion(++currentQuestion);
    else alert('quiz npt found')

  }

  if (!quiz.length)
    return(<h1>Loading ....</h1>)

  return (
    <div className="App">
      <QuestionCard 
      options ={quiz[currentQuestion].option}
      question={quiz[currentQuestion].question}
      callback={handleSubmit}
      />

    </div>
  );
}

export default App;
