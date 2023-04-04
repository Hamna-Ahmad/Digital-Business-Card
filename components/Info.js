import React from 'react'

export default function Info() {
    return (
        <header>
            <img className="portfolio-img" src="images/profile-img.png" alt="Hamna's Profile Photo" />
            <h1> Hamna Ahmad </h1>
            <h3> Frontend Developer </h3>
            <div className="btn-container">
                <button className="email-btn btn"><i className="fa-solid fa-envelope"></i>Email</button>
                <button className="linkedin-btn btn"><i className="fa-brands fa-linkedin "></i>LinkedIn</button>
                
            </div>
        </header>
        
    )
}
