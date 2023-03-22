import React from 'react';
import '../css/FourBlocks.css';

const FourBlocks = () => {
  return (
    <div className="four-blocks">
      <div className="four-blocks__row">
        <div className="four-blocks__block">
          <h2>Block 1</h2>
          <p>Some text here</p>
        </div>
        <div className="four-blocks__block">
          <h2>Block 2</h2>
          <p>Some text here</p>
        </div>
      </div>
      <div className="four-blocks__row">
        <div className="four-blocks__block">
          <h2>Block 3</h2>
          <p>Some text here</p>
        </div>
        <div className="four-blocks__block">
          <h2>Block 4</h2>
          <p>Some text here</p>
        </div>
      </div>
    </div>
  );
};

export default FourBlocks;