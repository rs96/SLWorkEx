import React from 'react';
import './tile.css'

const Tile = () => {
    const onClick = () => {
        console.log("let's test");
    }
    return(
    <div className="tile" onClick={onClick}>
        X
    </div>
  )};

export default Tile;
