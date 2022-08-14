import React, { useEffect } from 'react';
import { useState } from 'react';
import Box from './Box';
import "../App.css"

const Game = () => {



  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", "",]);
  const [boxStyle, setBoxStyle] = useState("box");
  const [win, setWin] = useState("");
  const [indexes, setIndexes] = useState([]);

  useEffect(() => {
    const result = checkWin(boxes);
    const winner = result.winner;
    const index = result.indexes;
    console.log(winner);
    console.log(index);
    setWin(winner);
    setIndexes(index);

  }, [boxes])


  const checkWin = (boxes) => {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < patterns.length; i++) {
      const [a, b, c] = patterns[i];
      if (
        boxes[a] &&
        boxes[b] &&
        boxes[c] &&
        boxes[a] === boxes[b] &&
        boxes[a] === boxes[c]
      ) {
        return { winner: boxes[a], indexes: patterns[i] };
      }
    }
    return "";
  }



  const changeValue = (id) => {
  let values = [...boxes];
  // alert(id);
  if(win){
    setBoxes(Array(9).fill(""));
    return;
  }

    if (values[id] === "") {
      setBoxStyle("box box-x");
      values[id] = "X";
    } else if (values[id] === "X") {
      setBoxStyle("box box-o");
      values[id] = "O";
    } else {
      setBoxStyle("box");
      values[id] = "";
    }

    setBoxes(values);
    console.log(boxes);

};

 

  console.log(boxes);

 

  return (
    <div className='game'>

      {boxes.map((box, index) => (<Box key={index} id={index} changeValue={changeValue} boxStyle={boxStyle} boxes={boxes} win={win} indexes={indexes} setBoxStyle={setBoxStyle} />))}

    </div>


  )
}

export default Game






