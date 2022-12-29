import Layout from '../components/LayoutHome';
import '../App.css';
import CardList from '../components/Card';
import data from '../data/data.json'





function Home() {
  
  return (
    
    <div>
      
    <Layout />
    
    <div className="bodyDiv" >
      
      {data.map((object) => (
        
        <CardList {...object} key={data.indexOf(object)}/>
      ))}
    <CardList />
    </div>
    </div>
    
    
  );
  
}

export default Home;
