import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Body(props) {
    return (
        <div className="card">
            <img src="./images/pfp.jpg"/>
            <div className="info">
                <h2>{props.name}</h2>
                <p>{props.title}</p>
                <p>{props.numb}</p>
            </div>
            <div className="buttons">
                <button>Email</button>
                <button>LinkedIn</button>

            </div>
            <div className="paras">
                <h3>About</h3>
                <p>{props.About}</p>
                <h3>Interests</h3>
                <p>{props.Interests}</p>


            </div>

        </div>
    
    )
}