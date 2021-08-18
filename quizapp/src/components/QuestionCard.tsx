import React, { useState } from "react";
import {questionPropsType} from './../Types/quiz_type';

const QuestionCard:React.FC<questionPropsType> = ({question,options , callback})=>{
    

    let [selectedAns, setSelectedAns ] =useState("");
    const handleSelection = (e:any)=>{
        
        setSelectedAns(e.target.value);
    
    }
    return (
        <div className='question-container'>
            <div className='question'>
                {question}
                </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)} action="j.php" className="question-form" >
                {
                    options.map((opt:string , ind :number)=>{
                        return (
                            <div key={ind}>
                            <label className='radio'>
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
                <input type="submit" className='submit' />
            </form>

        </div>
    )
}
export default QuestionCard;