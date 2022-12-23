
import React, {useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import  styled from 'styled-components';
import SliderArrow from  '../assets/SliderArrow.png';


const StyledImg = styled.img`
width:89%;
height: 415px;
display: block;
object-fit: cover;
margin-left: auto;
margin-right: auto;
border-radius: 25px;
transition-duration: 3s;`

function Caroussel(props) {


    
    const [count, setCount] = useState(0);
   
       
        function plusCounter(){
            
            
                if(count === props.pictures.length-1){
                    const next = document.getElementById('arrowNext');
                    next.style.display  ="none";
                    
                } else {
                    const next = document.getElementById('arrowNext');
                    const previous = document.getElementById('arrowPrevious');
                    previous.style.display = "block"
                    next.style.display ="block"
                    setCount(count + 1)
                }
                return true;
            
            
            
        }

        function minusCounter  () {
            if(count === 0){

                const previous = document.getElementById('arrowPrevious');
                previous.style.display  ="none";
            }  else {
                const previous = document.getElementById('arrowPrevious');
                const next = document.getElementById('arrowNext');
                next.style.display = "block"
                    previous.style.display ="block"
                    setCount(count - 1)
            }
        }
       


        
    return (
        
        
            <div style={{position: 'relative', }}>
                
            <button onClick={() => minusCounter()} className="arrowPrevious" id="arrowPrevious" ><img src={SliderArrow} alt="arrow" /></button>
        <div className="SliderConteneur"><StyledImg src={props.pictures[count]} alt="{element.pictures}"/></div>
        <button  onClick={() => plusCounter()} className="arrowNext"id="arrowNext" ><img src={SliderArrow} alt="arrow" /></button>
        </div>)
    
}



export default Caroussel
