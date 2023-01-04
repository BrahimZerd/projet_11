import empty from '../assets/emptystar.png'
import full from '../assets/fullstar.png'
import React from "react";


//element de rating pour les chambres // noté en étoiles /5//

function BasicFn  (props)  {
  
  const totalStars = 5;
  const activeStars = props.rate;

  return (
    <div  className ="divStars" style={{marginRight: '6%'}}
    >
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? <img className="stars" key={index} src={full} alt="pleine" /> : <img  className="stars" key={index}src={empty} alt="vide" />;
      })}
    </div>
  );
};

export default BasicFn;