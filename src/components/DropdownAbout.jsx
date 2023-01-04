
import * as React from 'react';
import arrow from '../assets/arrow.png'






//Element About


function Dropdown(props) {
    const [open, setOpen] = React.useState(false);
    
    //ouverture 

  const handleOpen = () => {
    setOpen(!open);
    const rotate = document.getElementById(`${props.id}`);
    
    if(open) {rotate.style.transform = 'rotate(0deg)'} else { rotate.style.transform = 'rotate(180deg)'}
    
  };
   
        
    return(
        
        <div className={props.className}>
        <button className="aboutdrop" onClick={handleOpen}>{props.name}<img id ={props.id} src={arrow} alt ="arrow" /></button>
        {open ? <div className="hidden"></div> : <div className="openDrop"><p className="description">{props.description}</p></div>}
      </div>
      
        
    )

}



export default Dropdown;
