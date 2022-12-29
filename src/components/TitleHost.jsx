
import React from "react";








function TitleHost(props) {
    
    
        
         return(
            
            
                
             <div className="divTitle" >
             <div className="title">
                 <h1>{props.title}</h1>
                <h2 style={{lineHeight: '0px'}}>{props.city}</h2>
            </div>
             <div className="authorDiv">
              
                
                <span style={{ margin:"10px",width: "75px",textAlign: "right"}}>{props.host}</span>
                <img className="hostImg" src= {props.picture} alt="host" />
             </div>
                
                    
                
           
            </div>)
          
         
         
     
    }

    export default TitleHost