import React from 'react';

import './Cell.css';

function Cell(props) {

  const className = 'Cell' +
    (props.borderless ? ' Borderless' : '') +
    (props.firstRow ? ' FirstRow' : '') +
    (props.firstCol ? ' FirstCol' : '');

  return (
    <td className={className}>
      {props.indicator &&
        <div className="Indicator">{props.indicator}</div>
      }
    </td>
  );
}

export default Cell;
