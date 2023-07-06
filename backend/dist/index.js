"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
var cells = (0, game_1.generateCells)(60, 60);
console.log(cells);
var drawLivingMap = function () {
    console.clear();
    (0, game_1.returnStringMap)(cells);
    setInterval(function () {
        console.clear();
        cells = (0, game_1.nextGeneration)(cells);
        (0, game_1.returnStringMap)(cells);
    }, 300);
};
drawLivingMap();
//# sourceMappingURL=index.js.map