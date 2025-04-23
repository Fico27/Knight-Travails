const possibleKnightMoves = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
];

function possibleValidMoves([x, y]) {
  let possibleMoves = [];

  //Adds from our start/current possition to see new possible moves
  for (let [possibleX, possibleY] of possibleKnightMoves) {
    let nextX = x + possibleX;
    let nextY = y + possibleY;

    //8 is the boardsize 8x8 chess board
    if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8) {
      possibleMoves.push([nextX, nextY]);
    }
  }
  return possibleMoves;
}
