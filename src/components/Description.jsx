
import React from "react";
import arrow from '../assets/arrow.png'



//function Description & Equipements


function Description(props) {
    const [open, setOpen] = React.useState(true);
    const [openEquip,  setOpenEquipement] = React.useState(true);
   

    //ouverture description
  const openDescription = () => {
    setOpen(!open);
    const rotate = document.getElementById('arrowDescription');
    if(open) 
    {rotate.style.transform = 'rotate(180deg)'}
    else 
    { rotate.style.transform = 'rotate(0deg)'}
    
  };
   
    //ouverture Equipements
  const openEquipements = () =>  {
    setOpenEquipement(!openEquip);
    const rotate = document.getElementById('arrowEquipements');
    
    if(openEquip)
    {rotate.style.transform = 'rotate(180deg)'}
    else
    { rotate.style.transform = 'rotate(0deg)'}
  }
        
    return(
        
        <div className="descriptionEquipement">
            <div>
        <button className="button_open" onClick={openDescription}>Description<img id="arrowDescription" src={arrow} alt ="arrow" /></button>
        {open ? 
        <div className="hidden"></div> : <div className="openDescription">
            <p className="description">{props.description}</p>
        </div>}
        </div>
        <div>
        <button className="button_open" onClick={openEquipements}>Equipements<img id="arrowEquipements" src={arrow} alt ="arrow" /></button>

        {openEquip ? 
        
        <div className="hidden"></div> : <div className="openEquipements">
            <ul>{props.equipments.map((equipement)  => (<li> {equipement}</li>))}</ul>
        </div>}
        </div>
      </div>
      
        
    )

}

export  default Description;
