import ImgAbout from '../assets/LayoutAbout.png'

    
//image de la page A propos

function LayoutAbout() {
   
    return(
    <div style={{position: 'relative'}}>
        <img className="aboutImg" src={ImgAbout}   alt="accueil"/>
    </div>
)
}

export  default LayoutAbout;