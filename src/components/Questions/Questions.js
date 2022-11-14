import React from 'react';
import './Questions.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({questions}) => {
    const {correctAnswer, question, options} = questions;
    const notify = (checkedAnswer) => checkedAnswer === correctAnswer ? toast("Your answer is Correct!"): toast("Your answer is Wrong!");
    return (
        <div className='my-2 questions px-3 py-4 border rounded'>
            <h5 className='text-start'>{question}</h5>
            {
                options.map(option=>(
                    <div className='text-start'>
                        
                       <input type="radio" className="form-check-input" id={option.id} name="optradio" value={option} onClick={()=>notify(option)}/> {option}  
                    </div>
                ))
            }
            
            <ToastContainer autoClose={1000}/>
            
            
        </div>
    );
};

export default Questions;
