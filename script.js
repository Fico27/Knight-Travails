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

function knightTravails(start, end) {
  // saves the queue and current positions
  let queue = [[start, [start]]];

  let visited = new Set();

  while (queue.length > 0) {
    let [current, pathSoFar] = queue.shift();
    let setKey = current.toString();

    if (setKey === end.toString()) {
      return pathSoFar;
    }

    if (!visited.has(setKey)) {
      visited.add(key);

      const nextMove = possibleValidMoves(current);

      for (let move of nextMove) {
        //sets new current for next loop and added the new current to the pathSoFar
        queue.push([move], [...pathSoFar, move]);
      }
    }
  }
}
