import LayoutAbout from "../components/LayoutAbout";
import colors from '../utils/colors';
import Dropdown from "../components/DropdownAbout";
import styled from "styled-components";
import aboutdata from "../../src/assets/about.json"
const StyledDiv = styled.div`
`



function About() {
    
    return(
    <div> 
        
        <LayoutAbout />
        {aboutdata.map((object) => (
					<Dropdown {...object} key={aboutdata.indexOf(object)} />
				))}
        
        
    </div>
    
        
        
        
    )
}



export  default About