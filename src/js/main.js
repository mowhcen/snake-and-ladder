/**
 * import exported functions in other js files into main
 */

import { allCell, initialCellBoard, positionCelNumbers } from "./board";

import initialInput from "./input";

initialCellBoard();

positionCelNumbers(allCell());

initialInput();
