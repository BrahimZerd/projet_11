
import styled from "styled-components";
import React from "react";
import colors from '../utils/colors'

const StyledTitle = styled.div`
margin: 100px;
`

const StyledAuthor = styled.div`

margin: 100px;
display:  flex;
font-size: 18px;
font-weight: 500;
color: ${colors.primary};


`


const StyledImghost = styled.img`
height: 64px;
width: 64px;
border-radius: 50%;
`

function TitleHost(props) {
    
    
        
         return(
            
            
                
             <div  style={{display: 'flex', justifyContent: 'space-between', height: "230px"}}>
             <StyledTitle>
                 <h1>{props.title}</h1>
                <h2 style={{lineHeight: '0px'}}>{props.city}</h2>
            </StyledTitle>
             <StyledAuthor>
              
                
                <span style={{ margin:"10px",width: "75px",textAlign: "right"}}>{props.host}</span>
                <StyledImghost src= {props.picture} alt="host" />
             </StyledAuthor>
                
                    
                
           
            </div>)
          
         
         
     
    }

    export default TitleHost