import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../assets/LOGO.png' 
import colors from '../utils/colors'
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
        <div className="headerDiv">
        <img className="headerLogo" src={LOGO} alt='logo' />
        
        <nav>
        <Link className="headerLink" id='home' onClick={homeClick} style={{marginRight:'57px'}} to="/">Accueil</Link>
        <Link className="headerLink"  id= 'about' onClick={aboutClick} to='/about'>A propos</Link>
        </nav>
        </div>
    )
}

export default Header;