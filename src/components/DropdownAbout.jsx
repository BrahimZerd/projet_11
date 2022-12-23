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
  console.log(props)
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



export default Dropdown;
