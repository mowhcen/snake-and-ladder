/**
 * import exported functions in other js files into main
 */

import { allCell, initialCellBoard, positionCelNumbers } from "./board";

initialCellBoard();

positionCelNumbers(allCell());
