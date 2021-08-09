import { Label } from "@material-ui/icons";
import React from "react";
import {questionPropsType} from './../Types/quiz_type';

const QuestionCard:React.FC<questionPropsType> = ({question,options , callback})=>{
    console.log(question,options)
    return (
        <div className='question-container'>
            <div className='question-container'>
                {question}
                </div>
            <form onSubmit={callback} action="j.php">
                {
                    options.map((opt:string , ind :number)=>{
                        return (
                            <div key={ind}>
                            <label>
                                <input
                                type='radio'
                                name="opt"
                                value={opt} />
                                {opt}
                                

                            </label>
                            </div>
                        )
                    })
                }
                <input type="submit" />
            </form>

        </div>
    )
}
export default QuestionCard;