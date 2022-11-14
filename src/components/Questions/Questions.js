import React from 'react';
import './Questions.css';

const Questions = ({questions}) => {
    const {correctAnswer, question, options} = questions;
    return (
        <div className='my-2 questions px-3 py-4 border rounded'>
            <h5 className='text-start'>{question}</h5>
            {
                options.map(option=>(
                    <div className='text-start'>
                       <input type="radio" className="form-check-input" id={option.id} name="optradio" value={option}/> {option}  
                    </div>
                ))
            }
            
        </div>
    );
};

export default Questions;
/* <div class="">
                <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1"/> Option 1
                <label class="form-check-label" for="radio1"></label>
            </div>
            <div class="">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2"/> Option 2
                <label class="form-check-label" for="radio2"></label>
            </div>
            <div class="">
                <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option3"/> Option 2
                <label class="form-check-label" for="radio3"></label>
            </div> */