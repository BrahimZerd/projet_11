import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/colors'


const StyledSpan = styled.span`
font-size: 288px;
color: ${colors.primary};
display: block;
text-align: center;

`
const StyledLink = styled(Link)`
color: ${colors.primary};
font-size: 18px;
display: block;
margin-top: 182px;
margin-bottom: 159px;
font-weight: bold;
text-align: center;
`





function errorPage() {
  
    return(
        <div>
        <StyledSpan> 404</StyledSpan>
        <StyledSpan style={{fontSize: '36px'}}>Oups! La page que vous demandez n'existe pas.</StyledSpan>
        <StyledLink to="/">Retourner à la page d'accueil</StyledLink>
        </div>
        
    )
}



export  default errorPage