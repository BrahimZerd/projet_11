import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, {useState , useEffect} from "react";
import TitleHost from "../components/TitleHost";
import TagsAndRates from "../components/TagsAndRatings";
import Description from "../components/Description";
import Caroussel from "../components/CarousselSlider";


function Location() {
   return( 
            <div>
             <Caroussel  />
            <TitleHost />
            <TagsAndRates  />
            <Description />

            </div>)
    }
    

   

    
    

    

    export default Location