import empty from '../assets/emptystar.png'
import full from '../assets/fullstar.png'
import React from "react";




function BasicFn  (props)  {
  const totalStars = 5;
  const activeStars = props.rate;

  return (
    <div style={{marginRight: '6%'}}>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? <img src={full} alt="pleine" /> : <img src={empty} alt="vide" />;
      })}
    </div>
  );
};

export default BasicFn;