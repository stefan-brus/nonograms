import React, { useState } from 'react';

import Cell from './Cell';

import './Grid.css';

function Grid(props) {

  const numRows = props.solution.length;
  const numCols = props.solution[0].length;

  const initialGrid = Array(numRows).fill(Array(numCols).fill(false));
  const [grid, setGrid] = useState(initialGrid);

  const colIndicators = [];
  for (let i = 0; i < numCols; i++) {
    colIndicators.push(indicator(columnAsRow(props.solution, i)));
  }

  const rowIndicators = [];
  for (let i = 0; i < numRows; i++) {
    rowIndicators.push(indicator(props.solution[i]));
  }

  const longestRowIndicator = Math.max(...rowIndicators.map(indicator => indicator.length));
  const longestColIndicator = Math.max(...colIndicators.map(indicator => indicator.length));

  const headerRows = [];
  for (let i = 0; i < longestColIndicator; i++) {
    const row = [];

    for (let j = 0; j < longestRowIndicator + numCols; j++) {
      const colIdx = j  - longestRowIndicator;
      const paddingColumn = colIdx < 0;
      const indicatorIdx = paddingColumn ? null : i - (longestColIndicator - colIndicators[colIdx].length);
      const hasIndicatorOnRow = !paddingColumn && colIndicators[colIdx].length > indicatorIdx;
      const hasGridBorder = !paddingColumn && i === longestColIndicator - 1;

      if (hasIndicatorOnRow) {
        row.push(<Cell
          key={j}
          indicator={colIndicators[colIdx][indicatorIdx]}
          borderless={true}
          firstRow={hasGridBorder}
        />);
      } else {
        row.push(<Cell
          key={j}
          borderless={true}
          firstRow={hasGridBorder}
        />);
      }
    }

    const rowElm = <tr key={i}>{row}</tr>;
    headerRows.push(rowElm);
  }

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 0; j < longestRowIndicator + numCols; j++) {
      const colIdx = j - longestRowIndicator;
      const indicatorCol = colIdx < 0;
      const indicatorIdx = indicatorCol ? j - (longestRowIndicator - rowIndicators[i].length) : null;
      const hasIndicator = indicatorCol && rowIndicators[i].length > indicatorIdx;
      const hasGridBorder = indicatorCol && j === longestRowIndicator - 1;

      if (hasIndicator) {
        row.push(<Cell
          key={j}
          indicator={rowIndicators[i][indicatorIdx]}
          borderless={true}
          firstCol={hasGridBorder}
        />);
      } else if (indicatorCol) {
        row.push(<Cell
          key={j}
          borderless={true}
          firstCol={hasGridBorder}
        />);
      } else {
        row.push(<Cell
          key={j}
        />);
      }
    }

    const rowElm = <tr key={i}>{row}</tr>;
    rows.push(rowElm);
  }

  return (
    <div className="Grid">
      <table>
        <thead>
          {headerRows}
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

function indicator(cells) {
  let count = 0;
  const result = [];

  cells.forEach(cell => {
    if (cell) {
      count++;
    } else if (count > 0) {
      result.push(count);
      count = 0;
    }
  });

  if (count > 0) {
    result.push(count);
  }

  return result;
}

function columnAsRow(grid, col) {
  const result = [];

  for (let i = 0; i < grid.length; i++) {
    result.push(grid[i][col]);
  }

  return result;
}

export default Grid;
