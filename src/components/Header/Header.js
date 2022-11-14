import React from 'react';
import './Header.css';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Header = () => {
    const topics = useLoaderData();
    return (
        <div className='container mt-3'>
            <div className='d-flex align-items-center header py-5'>
                <div className='text-white'>
                    <h2 className=''>We help you learn what you love</h2>
                    <p className='mx-auto text-center w-75'>A quiz refers to a short test of knowledge, typically around 10 questions in length, with question formats often including multiple choice, fill in the blanks, true or false and short answer. </p>
                    <button className='p-2 rounded'>Browse Quizzes</button>
                </div>
                
            </div>
                
            <Topics topics = {topics.data}></Topics>
                 
        </div>
  
    );
};

export default Header;