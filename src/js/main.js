/**
 * import exported functions in other js files into main
 */

import { allCell, initialCellBoard, positionCelNumbers } from "./board";
import { choseColor, dropDown } from "./dropdown";

import initialInput from "./input";
import roleDice from "./dice";
import sampleMove from "./move";

initialCellBoard();

positionCelNumbers(allCell());

initialInput();

roleDice();

sampleMove();

dropDown();

choseColor();
