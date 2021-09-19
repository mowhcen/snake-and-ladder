/**
 * import exported functions in other js files into main
 */

import {
    allCell,
    drawLine,
    initialCellBoard,
    positionCelNumbers,
} from "./board";
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

drawLine(3, 60, "left-ladder");
drawLine(6, 27, "right-ladder");
drawLine(11, 70, "vertical");
drawLine(35, 56, "left-ladder");
drawLine(68, 93, "vertical");
drawLine(64, 99, "left-ladder");

drawLine(37, 1, "right-snake");
drawLine(25, 5, "vertical");
drawLine(47, 9, "left-snake");
drawLine(65, 59, "right-snake");
drawLine(87, 54, "vertical");
drawLine(96, 61, "right-snake");
drawLine(92, 69, "vertical");
