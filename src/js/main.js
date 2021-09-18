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

$("#blue").appendTo(".cel-3");

$("#blue").addClass("end-point");

$("#blue").addClass("ladder-clime-six");

$("#yellow").appendTo(".cel-6");

$("#yellow").addClass("end-point");

$("#yellow").addClass("move-three-r");

$("#green").appendTo(".cel-76");

$("#green").addClass("end-point");

$("#green").addClass("eaten-by-snake-fourth");

$("#red").appendTo(".cel-95");

$("#red").addClass("end-point");

$("#red").addClass("move-five-l");
