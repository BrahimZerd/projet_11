import { useNavigate } from "react-router-dom";
const NewComponent = (props) => {
    const navigate = useNavigate();
    if(props.id === undefined){
        navigate("/error");
    }
    return (true)
}


export default NewComponent;