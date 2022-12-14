import LayoutAbout from "../components/LayoutAbout";
import colors from '../utils/colors';
import AllDropdowns from "../components/DropdownAbout";
import styled from "styled-components";

const StyledDiv = styled.div`
`



function About() {
    
    return(
    <div> 
        
        <LayoutAbout />
        <AllDropdowns />
        
        
    </div>
    
        
        
        
    )
}



export  default About