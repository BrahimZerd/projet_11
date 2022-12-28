
import React  from "react";



function Tags(props) {
    return(
   
   props.tags.map((el) => {
    return(
      
        <span className="tags">{el}</span>
          
    
        )})

  
              
                )}
           
            
        
      
         
     
    

    export default Tags;