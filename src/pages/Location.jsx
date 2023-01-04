import { useParams } from "react-router-dom";
import data from '../data/data.json'
import React from "react";
import TitleHost from "../components/TitleHost";
import Tags from "../components/Tags";
import Description from "../components/Description";
import Caroussel from "../components/CarousselSlider";
import BasicFn from '../components/Rate'

import { Navigate } from 'react-router-dom';

function Location() {


    const {id} = useParams();
   

    const filtered = data.find((element) => element.id === id );
    
  if (filtered === undefined) {
    return(
        <Navigate to='/error' />
    )
  }
     
    
   
        
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
            <div className="tagDiv">
                <div style={{display:"flex"}}>
            <Tags 
                tags = {filtered.tags}
                
            />
            </div>
            <BasicFn 
              id = {filtered.id}
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