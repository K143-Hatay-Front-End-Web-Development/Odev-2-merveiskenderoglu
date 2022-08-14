import React, { useEffect } from 'react';


const Box = (props) => {

  const {id,changeValue,boxStyle,boxes,win,indexes,setBoxStyle} = props;

  const borderCheck = (() => {
  if (win === "X" && indexes.includes(id)) return "box-x-win"; 
  if (win === "O" && indexes.includes(id)) return "box-o-win";
  console.log("box" , indexes)
})();


 
  return (
    <div className={`${borderCheck}? ${borderCheck} : ${boxStyle}`} onClick={() => changeValue(id)}>
      {boxes[id]}
    </div>
  )
}

export default Box


