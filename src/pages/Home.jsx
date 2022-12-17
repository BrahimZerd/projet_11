import Layout from '../components/LayoutHome';
import '../App.css';
import styled from 'styled-components';
import CardList from '../components/Card';


const BodyDiv = styled.div`
background-color: #F7F7F7;
border-radius: 25px;

width: 89%;
margin: 0 auto;`

function Home() {
  
  return (
    
    <div>
      
    <Layout />
    
    <BodyDiv >
    <CardList />
    </BodyDiv>
    </div>
    
    
  );
  
}

export default Home;
