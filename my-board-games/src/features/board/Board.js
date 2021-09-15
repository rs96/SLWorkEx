import React, { useState } from "react";
import Tile from "../tile/Tile";
import './board.css'

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState([{squares: Array(9).fill(null)} ])
  const [status, setStatus] = useState('')

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  const handleClick = (i) => {
    console.log(i);
    if(calculateWinner(squares) || squares[i]){
      return
    }
    squares[i] = isXNext ? 'X' : 'O'
    setSquares(squares);
    setIsXNext(!isXNext);
    history.concat([{squares: squares}])
    setHistory(history)
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus('Winner: ' + winner);
    } else {
      setStatus('Next player: ' + (isXNext ? 'X' : 'O'));
    }
  }

  return (
    <div>
      <div className='status'>{status}</div>
      <div className="board">
    
    {[0, 1, 2].map(i => (
      <Tile key={i} onClick={() => handleClick(i)} value={squares[i]}/>
    ))}
    {[3, 4, 5].map(i => (
      <Tile key={i} onClick={() => handleClick(i)} value={squares[i]}/>
    ))}

    {[6, 7, 8].map(i => (
      <Tile key={i} onClick={() => handleClick(i)} value={squares[i]}/>
    ))}
  </div>
    </div>

)};

export default Board;
