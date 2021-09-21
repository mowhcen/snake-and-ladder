/**
 * import exported functions in other js files into main
 */

import dropDown from "./dropdown";
import initialCellBoard from "./board";
import initialGame from "./input";
import roleDice from "./dice";

// import sampleMove from "./move";

/**
 * draw the board on page by js
 */
initialCellBoard();
/**
 * by calling this function game will start running
 */
initialGame();
/**
 * active drop down and functionality
 */
dropDown();

roleDice();
