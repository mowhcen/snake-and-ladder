/**
 * import exported functions in other js files into main
 */

import { allCell, initialCellBoard, positionCelNumbers } from "./board";

import initialInput from "./input";
import roleDice from "./dice";

initialCellBoard();

positionCelNumbers(allCell());

initialInput();

roleDice();
