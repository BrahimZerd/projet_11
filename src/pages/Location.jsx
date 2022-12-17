import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, {useState , useEffect} from "react";
import TitleHost from "../components/TitleHost";
import TagsAndRates from "../components/TagsAndRatings";



function Location() {
   return( 
            <div>
            <TitleHost />
            <TagsAndRates  />
            </div>)
    }
    

   

    
    

    

    export default Location