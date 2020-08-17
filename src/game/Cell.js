import React from 'react';

import './Cell.css';

function Cell(props) {

  const className = 'Cell' + (props.firstRow ? ' FirstRow' : '') + (props.firstCol ? ' FirstCol' : '');

  return (
    <td className={className} />
  );
}

export default Cell;
