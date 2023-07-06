export type Cell = boolean;
export type Row = Cell[];
export type Map = Row[];

const getAliveNeighbours = (
  cells: Map,
  rowIndex: number,
  cellIndex: number
) => {
  let liveCells = 0;

  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      if (rowOffset === 0 && colOffset === 0) {
        continue;
      }

      const neighbourRow = rowIndex + rowOffset;
      const neighbourCol = cellIndex + colOffset;

      if (cells[neighbourRow] && cells[neighbourRow][neighbourCol]) {
        liveCells++;
      }
    }
  }

  return liveCells;
};

export const generateCells = (rows: number, cols: number) => {
  let initialCells: Map = [];

  for (let row = 0; row < rows; row++) {
    initialCells.push([]);
    for (let col = 0; col < cols; col++) {
      initialCells[row].push(Math.round(Math.random()) === 1);
    }
  }

  return initialCells;
};

export const generateStringMap = (cells: Map) => {
  let map = "";

  cells.forEach((row) => {
    row.forEach((cell) => {
      map += cell ? "[*]" : "[ ]";
    });
    map += "\n";
  });

  console.log(map);
};

export const nextGeneration = (cells: Map) => {
  const newCells: Map = [];

  cells.forEach((row, rowIndex) => {
    newCells.push([]);
    row.forEach((cell, cellIndex) => {
      const aliveNeighbours = getAliveNeighbours(cells, rowIndex, cellIndex);

      if (aliveNeighbours > 3 || aliveNeighbours < 2) {
        // Underpopulation and Overpopulation
        newCells[rowIndex].push(false);
      } else if (aliveNeighbours > 2 && newCells[rowIndex]) {
        // Survival
        newCells[rowIndex].push(true);
      } else if (aliveNeighbours === 3 && !newCells[rowIndex]) {
        // Reproduction
        newCells[rowIndex].push(true);
      } else {
        newCells[rowIndex].push(cell);
      }
    });
  });

  return newCells;
};
