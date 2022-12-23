import { useParams } from "react-router-dom";
import data from '../assets/data.json'
import React from "react";
import TitleHost from "../components/TitleHost";
import Tags from "../components/Tags";
import Description from "../components/Description";
import Caroussel from "../components/CarousselSlider";
import BasicFn from '../components/Rate'
import OnepicSlide from "../components/OnePictureOnly";
function Location() {


    const {id} = useParams();
   

    const filtered = data.find((element) => element.id === id );
    

    
   
        
   return( 
        
            <div>
             <Caroussel
             pictures= {filtered.pictures}
             
             />
            
          
                <TitleHost 
                
                title = {filtered.title}
                host = {filtered.host.name}
                city = {filtered.location}
                picture =  {filtered.host.picture}
                />
            <div style={{display: 'flex',marginLeft: '90px', justifyContent: "space-between"}}>
                <div style={{display:"flex"}}>
            <Tags 
                tags = {filtered.tags}
                
            />
            </div>
            <BasicFn 
              rate = {filtered.rating}
            />
            </div>
            <Description 
            description = {filtered.description}
            equipments = {filtered.equipments}
            />
            </div>)
    }
    

    
    

    

    export default Location