
import React  from "react";


//ajout des tags 
function Tags(props) {
    return(
   
   props.tags.map((el) => {
    return(
      
        <span key={el} className="tags">{el}</span>
          )})
    )
}
           
export default Tags;