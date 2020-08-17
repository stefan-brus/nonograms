import React from 'react';

import Grid from './Grid';

function Game() {

  return (
    <div className="Game">
      <Grid
        rows={15}
        cols={15}
      />
    </div>
  );
}

export default Game;
