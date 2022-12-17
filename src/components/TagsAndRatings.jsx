import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, {useState , useEffect} from "react";
import colors from '../utils/colors'

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

function TagsAndRates() {
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
        
        
        return(
            
            filter.map((elemnt => 
              <div style={{display: 'flex', marginLeft:'90px'}}key={elemnt.id}>{elemnt.tags.map(tag => 
              <StyledSpan>{tag}</StyledSpan>)}
              </div>  
            ))
            
            
         )
         
     
    }

    export default TagsAndRates;