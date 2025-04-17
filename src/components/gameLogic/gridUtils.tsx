export const checkForMatches = async (grid: any[][]) => {
  const matches: {row: number; col: number}[] = [];

  // check horizontal matches (3 or more in a row)
  for (let r = 0; r < grid.length; r++) {
    let matchLength = 1;
    for (let c = 0; c < grid[r].length - 1; c++) {
      if (grid[r][c] !== null && grid[r][c] === grid[r][c + 1]) {
        matchLength++;
      } else {
        if (matchLength >= 3) {
          for (let i = 0; i < matchLength; i++) {
            matches.push({row: r, col: c - i});
          }
        }
        matchLength = 1;
      }
    }

    if (matchLength >= 3) {
      for (let i = 0; i < matchLength; i++) {
        matches.push({row: r, col: grid[r].length - 1 - i});
      }
    }
  }

  // check vertical matches (3 or more in a row)
  for (let c = 0; c < grid[0].length; c++) {
    let matchLength = 1;
    for (let r = 0; r < grid.length - 1; r++) {
      if (grid[r][c] !== null && grid[r][c] === grid[r + 1][c]) {
        matchLength++;
      } else {
        if (matchLength >= 3) {
          for (let i = 0; i < matchLength; i++) {
            matches.push({row: r - 1, col: c});
          }
        }
        matchLength = 1;
      }
    }

    if (matchLength >= 3) {
      for (let i = 0; i < matchLength; i++) {
        matches.push({row: grid.length - 1 - i, col: c});
      }
    }
  }

  return matches;
};

export const clearMatches = async (
  grid: any[][],
  matches: {row: number; col: number}[],
) => {
  matches?.forEach(match => {
    grid[match.row][match.col] = 0;
  });
  return grid;
};

export const shiftDown = async (grid: any[][]) => {
  for (let col = 0; col < grid[0].length; col++) {
    let emptyRow = grid?.length - 1;

    for (let row = grid?.length - 1; row >= 0; row--) {
      if (grid[row][col] !== null && grid[row][col] !== 0) {
        if (emptyRow !== row) {
          grid[emptyRow][col] = grid[row][col];
          grid[row][col] = 0;
        }
        emptyRow--;
      } else if (grid[row][col] === null) {
        emptyRow = row - 1;
      }
    }
  }

  return grid;
};

export const fillRandomCandies = async (grid: any[][]) => {
  const candyTypes = [1, 2, 3, 4, 5]; // Example candy types
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 0) {
        grid[r][c] = candyTypes[Math.floor(Math.random() * candyTypes.length)];
      }
    }
  }
  return grid;
};

export const hasPossibleMoves = async (grid: any[][]): Promise<boolean> => {
  const rows = grid.length;
  const cols = grid[0].length;

  const swap = (r1: number, c1: number, r2: number, c2: number) => {
    const temp = grid[r1][c1];
    grid[r1][c1] = grid[r2][c2];
    grid[r2][c2] = temp;
  };

  // Check for adjacent candies of the same type
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === null) {
        continue;
      }

      if (c + 1 < cols && grid[r][c + 1] !== null) {
        swap(r, c, r, c + 1);
        if ((await checkForMatches(grid)).length > 0) {
          swap(r, c, r, c + 1); // Swap back
          return true;
        }
        swap(r, c, r, c + 1);
      }

      if (r + 1 < rows && grid[r + 1][c] !== null) {
        swap(r, c, r + 1, c);
        if ((await checkForMatches(grid)).length > 0) {
          swap(r, c, r + 1, c); // Swap back
          return true;
        }
        swap(r, c, r + 1, c);
      }
    }
  }

  return false;
};

export const shuffleGrid = async (grid: any[][]) => {
  console.log('Shuffling grid');
  const candies = grid.flat().filter(cell => cell !== null);
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = candies.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candies[i], candies[j]] = [candies[j], candies[i]];
  }

  let index = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] !== null) {
        grid[r][c] = candies[index++];
      }
    }
  }

  return grid;
};

export const handleShuffleAndClear = async (grid: any[][]) => {
  console.log('Handling shuffle and clear');
  let newGrid = await shuffleGrid(grid);
  let totalClearedCandies = 0;
  let matches = await checkForMatches(newGrid);
  while (matches?.length > 0) {
    totalClearedCandies = matches?.length;
    newGrid = await clearMatches(newGrid, matches);
    newGrid = await shiftDown(newGrid);
    newGrid = await fillRandomCandies(newGrid);

    matches = await checkForMatches(newGrid);
  }
  return {grid: newGrid, clearedMatching: totalClearedCandies};
};
