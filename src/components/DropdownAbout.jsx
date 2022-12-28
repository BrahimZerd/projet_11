
import * as React from 'react';
import arrow from '../assets/arrow.png'









function Dropdown(props) {
  console.log(props)
    const [open, setOpen] = React.useState(false);
    
    

  const handleOpen = () => {
    setOpen(!open);
    const rotate = document.getElementById(`${props.id}`);
    
    {open ? rotate.style.transform = 'rotate(0deg)' : rotate.style.transform = 'rotate(180deg)'}
    
  };
   
        
    return(
        
        <div className={props.className}>
        <button className="aboutdrop" onClick={handleOpen}>{props.name}<img id ={props.id} src={arrow} alt ="arrow" /></button>
        {open ? <div className="hidden"></div> : <div className="openDrop"><p className="description">{props.description}</p></div>}
      </div>
      
        
    )

}



export default Dropdown;
