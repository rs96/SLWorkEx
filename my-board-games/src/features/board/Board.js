import React from "react";
import Tile from "../tile/Tile";
import './board.css'

const Board = () => (
  <div className="board">
    {[0, 1, 2].map(() => (
      <Tile />
    ))}
    {[3, 4, 5].map(() => (
      <Tile />
    ))}

    {[6, 7, 8].map(() => (
      <Tile />
    ))}
  </div>
);

export default Board;
