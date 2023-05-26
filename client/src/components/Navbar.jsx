import React,{useState} from "react";
import logo from '../images/logo2.png';

const Navbar = () => {
    const handleScroll = ()=>{
        const element = document.getElementById('trend');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <div className="navbar" >
                <div className="left">
                    <img src={logo} alt="Movie.Ai" className="logoimage"/>
                </div>
                <div className="right" onClick={handleScroll}>
                    <i class="fa-solid fa-fire"></i>
                    <p className="icons">Trending</p>
                </div>
            </div>
        </>
    )
}

export default Navbar;