

import LOGOfooter from '../assets/LOGO_FOOTER.png' 



function Footer () {
    return(
        <div className="footerDiv">
        <img id="logo" src={LOGOfooter} alt='logo' />
        <span>© 2020 Kasa. All rights reserved</span>
        
       
        </div>
    )
}

export default Footer;