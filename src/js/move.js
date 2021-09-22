"use strick";

import { getLadderCell, getSnakeCell } from "./board";

let $snakePoint = getSnakeCell();

let $ladderPoint = getLadderCell();

const start = ($color) => {
    $("#cel-1").append(
        '<div id="start" class="mead-container point point--start"></div>'
    );

    $(`#${$color}`).appendTo("#start");
};

const move = ($currentCell, dice, $color) => {
    let $landingCell = $currentCell + dice;
    $(`#${$color}`).appendTo(`#cel-${$landingCell}`);

    if (!$(`#${$color}`).hasClass("point--end")) {
        $(`#${$color}`).addClass("point point--end");
    }

    let checkSnake = $snakePoint.forEach((element) => {
        if ($landingCell === element.start) {
            return element.finish;
        }
    });
    let checkLadder = $ladderPoint.forEach((element) => {
        if ($landingCell === element.start) {
            return element.finish;
        }
    });

    setTimeout(() => null, 200);
    if (checkSnake) {
        $(`#${$color}`).appendTo(`#cel-${checkSnake}`);
    } else if (checkLadder) {
        $(`#${$color}`).appendTo(`#cel-${checkLadder}`);
    }
};

export { start, move };
