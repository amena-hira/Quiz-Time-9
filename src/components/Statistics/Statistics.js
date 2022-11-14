import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    console.log(topics.data);
    return (
        <div className='mt-4 d-flex justify-content-center'>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Statistics;