import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/colors'


const StyledSpan = styled.span`
font-size: 288px;
color: ${colors.primary};
display: block;
text-align: center;

`





function errorPage() {
    return(
        <div>
        <StyledSpan> 404</StyledSpan>
        <StyledSpan style={{fontSize: '36px'}}>Oups! La page que vous demandez n'existe pas.</StyledSpan>
        </div>
    )
}



export  default errorPage