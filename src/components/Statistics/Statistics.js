import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    console.log(topics.data);
    return (
        
            <div className='mt-4 container'>
                <ResponsiveContainer className='mx-auto' width="70%" height={300}>
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
                
            </div>
        
        
    );
};

export default Statistics;