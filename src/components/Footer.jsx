

import LOGOfooter from '../assets/LOGO_FOOTER.png' 


//footer
function Footer () {
    return(
        <footer className="footerDiv">
        <img id="logo" src={LOGOfooter} alt='logo' />
        <span>© 2020 Kasa. All rights reserved</span>
        
       
        </footer>
    )
}

export default Footer;