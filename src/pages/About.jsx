import LayoutAbout from "../components/LayoutAbout";
import Dropdown from "../components/DropdownAbout";
import aboutdata from "../data/about.json"


//page A propos

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