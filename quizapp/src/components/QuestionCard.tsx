import React, { useState } from "react";
import {questionPropsType} from './../Types/quiz_type';

const QuestionCard:React.FC<questionPropsType> = ({question,options , callback})=>{
    // console.log(question,options)

    let [selectedAns, setSelectedAns ] =useState("");
    const handleSelection = (e:any)=>{
        // console.log()
        setSelectedAns(e.target.value);
    
    }
    return (
        <div className='question-container'>
            <div className=''>
                {question}
                </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)} action="j.php">
                {
                    options.map((opt:string , ind :number)=>{
                        return (
                            <div key={ind}>
                            <label>
                                <input
                                checked={selectedAns === opt}
                                required
                                type='radio'
                                name="opt"
                                value={opt} 
                                onChange={handleSelection}/>
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