import {Quiz} from './../Types/quiz_type';
import {QuestionType} from './../Types/quiz_type';
const shuffleArray = ( array :any[])=>
    [...array].sort(()=> Math.random()-0.5)

export const getQuizDetails = async (totalQuestions : number, level:string): Promise<QuestionType[]> =>{

    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let {results} = await res.json();
    const quiz:QuestionType[] = results.map((questionObj: Quiz )=>{

        return {
        question: questionObj.question,
        answer: questionObj.correct_answer,
        correct_answer : questionObj.correct_answer,
        option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
    }
    })

    return quiz
}