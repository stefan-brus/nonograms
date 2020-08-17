import React from 'react';

import Grid from './Grid';

function Game() {

  // TODO: Generate random nonograms
  const solution = [
    [true , false, false, false, false, false, false, false, false, false, false, false, false, false, true ],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, true , false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, true , true ],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, true , true ],
  ];

  return (
    <div className="Game">
      <Grid
        solution={solution}
      />
    </div>
  );
}

export default Game;
