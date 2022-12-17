import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, {useState , useEffect} from "react";
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

function TitleAuthor() {
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
        console.log(filter)
        
        return(
            
            filter.map((elemnt => 
                
            <div  key ={elemnt.id}style={{display: 'flex', justifyContent: 'space-between', height: "230px"}}>
            <StyledTitle>
                <h1>{elemnt.title}</h1>
                <h2 style={{lineHeight: '0px'}}>{elemnt.location}</h2>
            </StyledTitle>
            <StyledAuthor>
                <span style={{ margin:"10px",width: "75px",textAlign: "right"}}>{elemnt.host.name}</span>
                <StyledImghost src={elemnt.host.picture} alt="host" />
            </StyledAuthor>
                
                    
                
           
            </div>))
            
            
         )
         
     
    }

    export default TitleAuthor