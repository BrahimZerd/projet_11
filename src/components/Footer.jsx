
import styled from 'styled-components'
import LOGOfooter from '../assets/LOGO_FOOTER.png' 

const StyledLogo = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  margin-bottom: 15px;
`
const FooterDiv = styled.div`
background-color: black;
color: white;
height: 209px;
text-align: center;
margin:  auto;

  `

function Footer () {
    return(
        <FooterDiv>
        <StyledLogo src={LOGOfooter} alt='logo' />
        <span>© 2020 Kasa. All rights reserved</span>
        
       
        </FooterDiv>
    )
}

export default Footer;