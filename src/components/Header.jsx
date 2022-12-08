import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../assets/LOGO.png' 
import colors from '../utils/colors'

const StyledLogo = styled.img`
position: relative;
`
const StyledLink = styled(Link)`
font-size: 24px;
color: ${colors.primary};
text-decoration: none;
font-weight: 500;
padding: 57px;
&:hover{
    text-decoration: underline;
}
`

const StyledDiv = styled.div`
margin: 100px;`


function Header () {
    return(
        <StyledDiv>
        <StyledLogo src={LOGO} alt='logo' />
        
        <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to='/about'>A propos</StyledLink>
        </nav>
        </StyledDiv>
    )
}

export default Header;