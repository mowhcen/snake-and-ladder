"use strick";

import { getColors, getCount, getNames } from "./input";

import message from "./message";
import { move } from "./move";

const selectTurnShow = $("#turn-show");
let $count = 0;
let $current = [1, 1, 1, 1];

const winner = (names, index) => {
    alert(`congratulations!!!!  ${names[index]}`);
    location.reload();
};

const reOrderList = (dice) => {
    let color = getColors();
    let count = getCount();
    let player = dice.length % count;

    $current[player] = move(
        $current[player],
        dice[dice.length - 1],
        color[player]
    );
    if ($current[player] === 100) {
        winner(getNames(), player);
    }
};

const showTurnMessage = () => {
    const $namesArray = getNames();
    const $colorArray = getColors();
    selectTurnShow.html(`${$namesArray[$count]}`);
    selectTurnShow.css({
        "background-color": `var(--mead-color-${$colorArray[$count]})`,
        color: `var(--primary)`,
    });
    if ($namesArray.length === $count + 1) {
        $count = 0;
    } else {
        $count++;
    }
};

const turnOrder = (dice) => {
    if (dice.length > 0 && dice.length <= getCount()) {
        message("turn-gives");
        showTurnMessage();
        message("next");
    } else {
        reOrderList(dice);
    }
};

export { turnOrder, showTurnMessage, reOrderList };
