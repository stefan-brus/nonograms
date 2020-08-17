import React from 'react';

import Cell from './Cell';

import './Grid.css';

function Grid(props) {

  const rows = [];
  for (let i = 0; i < props.rows; i++) {
    const cols = [];

    for (let j = 0; j < props.cols; j++) {
        const element = <Cell
          key={j}
          firstRow={i === 0}
          firstCol={j === 0}
        />
        cols.push(element);
    }

    const row = <tr className="Row" key={i}>
      {cols}
    </tr>

    rows.push(row);
  }

  return (
    <div className="Grid">
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
