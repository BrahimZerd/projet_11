import LayoutHome from '../assets/LayoutHome.png'


//image de la page d'Accueil

function Layout() {
    
    return(
    <div style={{position: 'relative'}}>
        <img className="homeImg" src={LayoutHome}   alt="accueil"/>
        <span className="imgTitle">Chez vous, partout et ailleurs</span>
    </div>

    )
}

export  default Layout;