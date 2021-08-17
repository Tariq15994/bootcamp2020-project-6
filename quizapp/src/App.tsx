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
  let [restart, setRestart] = useState(false);


  useEffect(() => {

    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(5, "easy");
      // console.log(questions);
      setQuiz(questions);
    }
    fetchData();

  }, []);
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    console.log(quiz.length);
    e.preventDefault();

    const CurrentQuestion: QuestionType = quiz[questionNumber];

    // console.log("Correct ans " + CurrentQuestion.correct_answer + "--user Selection :" + userAns)
    if (userAns === CurrentQuestion.correct_answer) {
      setScore(++score);

    }
    // console.log(userAns);
    if (questionNumber !== quiz.length - 1)
      setQuestionNumber(++questionNumber);
    else
      // alert("your score is "+ score +"out of " +quiz.length);
      // setQuestionNumber(0);
      // setScore(0);
      setShowResult(true);


  }

  if (!quiz.length)
    return (<h1>Loading ....</h1>)
  if (showResult) {
    return (
      <div>
        <h1>Quiz Result</h1>
        <p>Your score is {score} out of {quiz.length} </p>
        <button onClick={()=>{return(<div>hlo</div>)}}>hwllo</button>
      </div>
    )

  }
// if (showResult){
//   return(
//     <div>hwllo</div>
//   )
// }



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






{/* <button onClick={() => {
          return (
            <div>
              <QuestionCard
                options={quiz[questionNumber].option}
                question={quiz[questionNumber].question}
                callback={handleSubmit} />
            </div>
          )
        }}>kmsknks
          <a href="QuestionCard"> start</a>
        </button> */}

        {/* <button onClick="">Start</button> */}