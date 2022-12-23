import React, {useState , useEffect} from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledLink = styled(Link)`
text-decoration: none;
`


function CardList(props) {
    

    return (
        <div className="card">
            
                    <div  key={props.id} className="cardDiv">
                    <StyledLink to= {props.id}  >
                        <h5 className="cardTitle"> {props.title}</h5>
                        <img className="cardImg" src= {props.cover} alt= 'coverCard' />
                    </StyledLink>
                    </div>
               
        </div>
    )
}

export default CardList;