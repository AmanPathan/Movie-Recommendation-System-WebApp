import React from "react";

const Greet = ()=>{
    const handleScroll = ()=>{
        const element = document.getElementById('content');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <div className="container greet">
                <h1>Meet <span>Movie.Ai</span></h1>
                <p>Best Movie Search Engine</p>
                <h2>Get Movie Recommendations With <span>AI</span>.</h2>
                <button onClick={handleScroll} className="getstarted">Get Started <i className="fa-solid fa-angle-right"></i></button>
            </div>
        </>
    )
}
export default Greet;