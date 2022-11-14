import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';
const Topic = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div className="col">
            <div className="card">
                <img src={logo} className="card-img-top img-thumbnail" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small>Total Question: {total}</small></p>
                    <Link to={`/topic/${id}`} className='btn fw-bold'>Let's Start</Link>
                </div>
            </div>
        </div>
        
      );
};

export default Topic;