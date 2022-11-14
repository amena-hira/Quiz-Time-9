import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions;
    console.log(questions);
    return (
        <div className='container pt-3'>
            {
                questions.map(question => <Questions key={question.id} questions={question}></Questions>)
            }
            
                
            

        </div>
    );
};

export default Quiz;