import React from 'react';
import Topic from '../Topic/Topic';

const Topics = ({topics}) => {
    
    return (
        <div className='my-5'>
            
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>  
                    {topics.map(topic => <Topic key={topic.id} topic = {topic}></Topic>)}
            </div>
            
            
        </div>
    );
};

export default Topics;