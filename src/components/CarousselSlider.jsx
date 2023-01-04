
import React, {useState} from "react";

import SliderArrow from  '../assets/SliderArrow.png';



//function carroussel + clic suivant & précédent
function Caroussel(props) {


    
    let [count, setCount] = useState(0);
   
       
        function plusCounter(){
                if(count === props.pictures.length-1){
                    setCount(0)
                } else {
                    
                    setCount(count + 1)
                }
                return true;
            
            
            
        }

        function minusCounter  () {
            if(count === 0){

                setCount(props.pictures.length-1)
            }  else {
                
                    setCount(count - 1)
            }
        }
       

    if(props.pictures.length > 1){
        
    return (
        <div style={{position: 'relative', }}>
        <button onClick={() => minusCounter()} className="arrowPrevious" id="arrowPrevious" ><img src={SliderArrow} alt="arrow" /></button>
        <div className="SliderConteneur"><img className="img_container" src={props.pictures[count]} alt="{element.pictures}"/><p className="counterSlider">{count+1}/{props.pictures.length}</p></div>
        <button  onClick={() => plusCounter()} className="arrowNext"id="arrowNext" ><img src={SliderArrow} alt="arrow" /></button>
        </div>)} 
    else {
    return(
        <div style={{position: 'relative', }}>
        <div className="SliderConteneur"><img className="img_container" src={props.pictures[count]} alt="{element.pictures}"/><p className="counterSlider">{count+1}/{props.pictures.length}</p></div>
        </div>)
            
        }
    
}



export default Caroussel
