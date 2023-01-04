import Layout from '../components/LayoutHome';
import CardList from '../components/Card';
import data from '../data/data.json'





function Home() {
  
  return (
  <div>
      <Layout />
    <div className="bodyDiv" >
      
      {data.map((object) => (
          
        <CardList {...object} key={data.indexOf(object)}/>
          

        ))
      }
    
    </div>
    </div>
    
    
  );
  
}

export default Home;
