"use strick";

import { getLadderCell, getSnakeCell } from "./board";

let $snakePoint = [];
let $landingCell = 0;
let $ladderPoint = [];

const start = ($color) => {
    $("#cel-1").append(
        '<div id="start" class="mead-container point point--start"></div>'
    );

    $snakePoint = getSnakeCell();
    $ladderPoint = getLadderCell();
    $(`#${$color}`).appendTo("#start");
};

const move = ($currentCell, dice, $color) => {
    $landingCell = $currentCell + dice;
    if ($landingCell > 100) {
        $landingCell = 100;
    }

    $(`#${$color}`).appendTo(`#cel-${$landingCell}`);

    if (!$(`#${$color}`).hasClass("point--end")) {
        $(`#${$color}`).addClass("point point--end");
    }

    let checkSnake = $snakePoint.find(
        (element) => $landingCell === element.start
    );
    let checkLadder = $ladderPoint.find(
        (element) => $landingCell === element.start
    );

    if (checkSnake) {
        $(`#${$color}`).appendTo(`#cel-${checkSnake.finish}`);
        return checkSnake.finish;
    } else if (checkLadder) {
        $(`#${$color}`).appendTo(`#cel-${checkLadder.finish}`);
        return checkLadder.finish;
    } else {
        return $landingCell;
    }
};

export { start, move };
