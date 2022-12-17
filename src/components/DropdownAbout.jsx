import styled from 'styled-components';
import * as React from 'react';
import arrow from '../assets/arrow.png'
import colors from '../utils/colors'

const StyledButton = styled.button`
margin: 0 auto;
position: relative;
background-color: ${colors.primary};
border: none;
border-radius: 5px;
color: #FFFFFF;
font-size: 24px;
width: 1023px;
height: 47px;
display: flex;
line-height: 45px;
justify-content: space-between;
padding-left: 15px;
margin-top:  33px;
&:hover{
  cursor: pointer;
}`

const StyledImg = styled.img`
width:  19.6px;
height: 15.86px;
position: absolute;
right: 2%;
top: 33%;`


const StyledText = styled.p`
margin-left: 18px;
padding-bottom: 14px;`




function Dropdown(props) {
    const [open, setOpen] = React.useState(false);
    
    

  const handleOpen = () => {
    setOpen(!open);
    const rotate = document.getElementById(`${props.id}`);
    
    {open ? rotate.style.transform = 'rotate(0deg)' : rotate.style.transform = 'rotate(180deg)'}
    
  };
   
        
    return(
        
        <div className={props.className}>
        <StyledButton onClick={handleOpen}>{props.name}<StyledImg id ={props.id} src={arrow} alt ="arrow" /></StyledButton>
        {open ? <div className="hidden"></div> : <div className="openDrop"><StyledText>{props.description}</StyledText></div>}
      </div>
      
        
    )

}
function AllDropdowns() {
    return (
      <div>
        <Dropdown name="Fiabilite" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
"  id="rotate0"/>
        <Dropdown name="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
" id="rotate1"/>
        <Dropdown name="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
" id="rotate2"/>
        <Dropdown name="Securite"  description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
" id="rotate3" className= "dropdownLast"/>
      </div>
    );
  }


export default AllDropdowns;
