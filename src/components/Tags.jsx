import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, {useState , useEffect} from "react";
import colors from '../utils/colors'
import Emptystar from '../assets/emptystar.png';
import Fullstar from '../assets/fullstar.png'


const StyledSpan = styled.span`
display: block;
padding-left:  15px;
padding-right: 15px;
height:  25px;
line-height: 25px;
margin-left: 10px;
text-align: center;
background-color: ${colors.primary};
color:  #FFFFFF;
border-radius: 10px;
font-size: 14px;
font-weight: 500;
`

function Tags(props) {
    return(
   
   props.tags.map((el) => {
    return(
      
        <StyledSpan>{el}</StyledSpan>
          
    
        )})

  
              
                )}
           
            
        
      
         
     
    

    export default Tags;