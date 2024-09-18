import React from 'react';
import ReactDOM from 'react-dom/client';
import pfp from "../images/pfp.jpg"
import linkIcon from "../images/liIcon.png"
import emLogo from "../images/emailLogo.png"


export default function Body(props) {
    return (
        <div className="card">
            <img src={pfp} alt="Abhay's pfp"/>
            <div className="info">
                <h2 className="nam">{props.name}</h2>
                <p className='tit'>{props.title}</p>
                <p>{props.numb}</p>
            </div>
            <div className="buttons">
                <button className='emBut'>
                    <img src={emLogo} alt="" />

                    Email
                    </button>
                <a href='www.linkedin.com/in/abhay-singh-75aa14284'>
                    <button className='linkBut'>
                    <img src={linkIcon} alt="LinkedIn Logo" />
                    LinkedIn
                    </button>
                </a>

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