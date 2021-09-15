/**
 * import exported functions in other js files into main
 */

import { allCell, initialCellBoard, positionCelNumbers } from "./board";
import { countingPlayer, namingPlayer } from "./input";

initialCellBoard();

positionCelNumbers(allCell());
