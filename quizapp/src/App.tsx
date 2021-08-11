import React, { useEffect, useState } from 'react';
import './App.css';
import { QuestionType, Quiz } from './Types/quiz_type';
import QuestionCard from './components/QuestionCard';
import { getQuizDetails } from './services/quiz_service'

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [questionNumber, setQuestionNumber] = useState(0)
  let [score, setScore] = useState(0);

  useEffect(() => {

    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(5, "easy");
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();

  }, []);
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const CurrentQuestion:QuestionType = quiz[questionNumber];
    
    console.log("Correct ans " + CurrentQuestion.correct_answer + "--user Selection :" + userAns)
    if(userAns === CurrentQuestion.correct_answer){
      setScore(++score);

    }
    console.log(userAns);
    if (questionNumber !== quiz.length - 1)
      setQuestionNumber(++questionNumber);
    else 
        alert("your score is "+ score +"out of " +quiz.length);
        // setQuestionNumber(0);
        setScore(0);


  }
  
  if (!quiz.length)
    return (<h1>Loading ....</h1>)

  return (
    <div className="App">
      <QuestionCard
        options={quiz[questionNumber].option}
        question={quiz[questionNumber].question}
        callback={handleSubmit}
      />

    </div>
  );
}

export default App;
