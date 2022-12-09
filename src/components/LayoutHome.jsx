import styled from "styled-components"
import LayoutHome from '../assets/LayoutHome.png'



const StyledLogo = styled.img`

display: block;
text-align: center;
margin-left: auto;
margin-right: auto;
border-radius: 15px;
filter: brightness(58%);
width: 89%;`
 
const StyledSpan = styled.span`
display: table;
position: relative;
bottom: 9vw;
color: #FFFFFF;
font-size: 48px;
margin: 0 auto;
font-weight: 500;`

function Layout() {
    
    return(
    <div style={{position: 'relative'}}>
        <StyledLogo src={LayoutHome}   alt="photo accueil"/>
        <StyledSpan>Chez vous, partout et ailleurs</StyledSpan>
    </div>

    )
}

export  default Layout;