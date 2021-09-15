import React from 'react';
import './tile.css'

const Tile = ({ onClick, value }) => {
    return(
    <button className="tile" onClick={onClick}>
        {value}
    </button>
  )};

export default Tile;
