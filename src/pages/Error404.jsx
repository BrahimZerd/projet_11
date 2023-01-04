import { Link } from 'react-router-dom'




//page d'erreur pour chemin d'accès érronné


function errorPage() {
  
    return(
        <div className="errorDiv">
        <span id="spanError"> 404</span>
        <span  id="spanError" style={{fontSize: '36px'}}>Oups! La page que vous demandez n'existe pas.</span>
        <Link className="BackHome" to="/">Retourner à la page d'accueil</Link>
        </div>
        
    )
}



export  default errorPage