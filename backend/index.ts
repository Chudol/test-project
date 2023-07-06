import { generateCells, nextGeneration, generateStringMap } from "./game";

let cells = generateCells(10, 10);

const drawLivingMap = () => {
  console.clear();
  generateStringMap(cells);

  setInterval(() => {
    console.clear();
    cells = nextGeneration(cells);
    generateStringMap(cells);
  }, 300);
};

drawLivingMap();
