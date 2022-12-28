import React from "react";
import { Link } from 'react-router-dom';





function CardList(props) {
    

    return (
        <div className="card">
            
                    <div  key={props.id} className="cardDiv">
                    <Link className="card_link" to= {props.id}  >
                        <h5 className="cardTitle"> {props.title}</h5>
                        <img className="cardImg" src= {props.cover} alt= 'coverCard' />
                    </Link>
                    </div>
               
        </div>
    )
}

export default CardList;