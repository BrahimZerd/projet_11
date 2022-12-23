import Layout from '../components/LayoutHome';
import '../App.css';
import styled from 'styled-components';
import CardList from '../components/Card';
import data from '../assets/data.json'
import { useParams } from 'react-router-dom';


const BodyDiv = styled.div`
background-color: #F7F7F7;
border-radius: 25px;

width: 89%;
margin: 0 auto;`

function Home() {
  
  return (
    
    <div>
      
    <Layout />
    
    <BodyDiv style={{display: "grid",gridTemplateColumns: "repeat(3 , 1fr)",
    }}>
      
      {data.map((object) => (
        
        <CardList {...object} key={data.indexOf(object)}/>
      ))}
    <CardList />
    </BodyDiv>
    </div>
    
    
  );
  
}

export default Home;
