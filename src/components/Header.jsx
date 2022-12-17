import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../assets/LOGO.png' 
import colors from '../utils/colors'
import * as React from 'react';

const StyledLogo = styled.img`
position: relative;
`
const StyledLink = styled(Link)`
font-size: 24px;
color: ${colors.primary};
text-decoration: none;
font-weight: 500;

&:hover{
    text-decoration: underline;
}
`

const StyledDiv = styled.div`
margin: 100px;`


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
        <StyledDiv>
        <StyledLogo src={LOGO} alt='logo' />
        
        <nav>
        <StyledLink id='home' onClick={homeClick} style={{marginRight:'57px'}} to="/">Accueil</StyledLink>
        <StyledLink  id= 'about' onClick={aboutClick} to='/about'>A propos</StyledLink>
        </nav>
        </StyledDiv>
    )
}

export default Header;