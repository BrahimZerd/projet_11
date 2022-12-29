import { Link } from 'react-router-dom'
import LOGO from '../assets/LOGO.png' 
import * as React from 'react';






function Header () {

    function  homeClick() {
        document.getElementById('home').style.textDecoration = "underline";
        document.getElementById('about').style.textDecoration = "none";
    }
    function  aboutClick() {
        document.getElementById('home').style.textDecoration = "none";
        document.getElementById('about').style.textDecoration = "underline";
    }
    
    return(
        <header className="headerDiv">
        <img className="headerLogo" src={LOGO} alt='logo' />
        
        <nav>
        <Link className="headerLink" id='home' onClick={homeClick} style={{marginRight:'57px'}} to="/">Accueil</Link>
        <Link className="headerLink"  id= 'about' onClick={aboutClick} to='/about'>A propos</Link>
        </nav>
        </header>
    )
}

export default Header;