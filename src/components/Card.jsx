import React, {useState , useEffect} from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
text-decoration: none;
`


function CardList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('../data.json');
            result.json().then(json => {
                setData(json)
                console.log(json)
            })
        }
        fetchData();
    }, [])

    return (
        <div className="card">
            {data.map((item)  => (
                    <div  key={item.id} className="cardDiv">
                    <StyledLink to= {item.id}  >
                        <h5 className="cardTitle"> {item.title}</h5>
                        <img className="cardImg" src= {item.cover} alt= 'coverCard' />
                    </StyledLink>
                    </div>
                ))}
        </div>
    )
}

export default CardList;