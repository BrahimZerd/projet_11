import styled from 'styled-components';
import React, {useState , useEffect} from "react";
import arrow from '../assets/arrow.png'
import colors from '../utils/colors'
import { useParams} from 'react-router-dom';


const StyledButton = styled.button`

position: relative;
background-color: ${colors.primary};
border: none;
border-radius: 5px;
color: #FFFFFF;
font-size: 24px;
width: 582px;
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






function Description() {
    const [open, setOpen] = React.useState(false);
    const [openEquip,  setOpenEquipement] = React.useState(false);
    const [data, setData] = useState([]);
    
    const params = useParams();
   

    
        const fetchData = async () => {
            const result = await fetch(`../data.json`);
            result.json()
                .then(json => {
                setData(json)
                
            })
        }
        useEffect (() => {fetchData();}
    , [])
        const filter = data.filter(element => element.id === params.id)


    

  const openDescription = () => {
    setOpen(!open);
    const rotate = document.getElementById('arrowDescription');
    
    {open ? rotate.style.transform = 'rotate(0deg)' : rotate.style.transform = 'rotate(180deg)'}
    
  };
   
  const openEquipements = () =>  {
    setOpenEquipement(!openEquip);
    const rotate = document.getElementById('arrowEquipements');
    
    {openEquip ? rotate.style.transform = 'rotate(0deg)' : rotate.style.transform = 'rotate(180deg)'}
  }
        
    return(
        filter.map(element  =>  
        <div style={{ display:'flex',justifyContent: 'space-between',margin:'100px', marginBottom: '250px'}}>
            <div>
        <StyledButton onClick={openDescription}>Description<StyledImg id="arrowDescription" src={arrow} alt ="arrow" /></StyledButton>
        {open ? 
        <div className="hidden"></div> : <div className="openDescription">
            <StyledText>{element.description}</StyledText>
        </div>}
        </div>
        <div>
        <StyledButton onClick={openEquipements}>Equipements<StyledImg id="arrowEquipements" src={arrow} alt ="arrow" /></StyledButton>

        {openEquip ? 
        <div className="hidden"></div> : <div className="openEquipements">
            <ul>{element.equipments.map(equipement =>  <li>{equipement}</li>)}</ul>
        </div>}
        </div>
      </div>
      
        
    ))

}

export  default Description;
