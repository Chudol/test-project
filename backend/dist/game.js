"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextGeneration = exports.returnStringMap = exports.generateCells = void 0;
var generateCells = function (rows, cols) {
    var initialCells = [];
    for (var row = 0; row < rows; row++) {
        initialCells.push([]);
        for (var col = 0; col < cols; col++) {
            initialCells[row].push(Math.round(Math.random()) === 1);
        }
    }
    return initialCells;
};
exports.generateCells = generateCells;
var getAliveNeighbours = function (cells, rowIndex, cellIndex) {
    var liveCells = 0;
    for (var rowOffset = -1; rowOffset <= 1; rowOffset++) {
        for (var colOffset = -1; colOffset <= 1; colOffset++) {
            if (rowOffset === 0 && colOffset === 0) {
                continue;
            }
            var neighbourRow = rowIndex + rowOffset;
            var neighbourCol = cellIndex + colOffset;
            if (cells[neighbourRow] && cells[neighbourRow][neighbourCol]) {
                liveCells++;
            }
        }
    }
    return liveCells;
};
var returnStringMap = function (cells) {
    var map = "";
    cells.forEach(function (row) {
        row.forEach(function (cell) {
            map += cell ? "[*]" : "[ ]";
        });
        map += "\n";
    });
    console.log(map);
};
exports.returnStringMap = returnStringMap;
var nextGeneration = function (cells) {
    var newCells = [];
    cells.forEach(function (row, rowIndex) {
        newCells.push([]);
        row.forEach(function (cell, cellIndex) {
            var aliveNeighbours = getAliveNeighbours(cells, rowIndex, cellIndex);
            if (aliveNeighbours > 3 || aliveNeighbours < 2) {
                newCells[rowIndex].push(false);
            }
            else if (aliveNeighbours > 2 && newCells[rowIndex]) {
                newCells[rowIndex].push(true);
            }
            else if (aliveNeighbours === 3 && !newCells[rowIndex]) {
                newCells[rowIndex].push(true);
            }
            else {
                newCells[rowIndex].push(cell);
            }
        });
    });
    return newCells;
};
exports.nextGeneration = nextGeneration;
//# sourceMappingURL=game.js.map