"use strick";

import { getColors, getNames } from "./input";

import message from "./message";

const selectTurnShow = $("#turn-show");
let $count = 0;

const showTurnMessage = () => {
    const $namesArray = getNames();
    const $colorArray = getColors();
    selectTurnShow.html(`${$namesArray[$count]}`);
    selectTurnShow.css({
        "background-color": `var(--mead-color-${$colorArray[$count]})`,
        color: `var(--primary)`,
    });
    console.log($namesArray);
    console.log($colorArray);
    console.log($count);
    if ($namesArray.length === $count + 1) {
        $count = 0;
    } else {
        $count++;
    }
};

const turnOrder = (dice) => {
    message("turn-gives");
    console.log($(`#player${0}`).html());
    console.log(dice);
    showTurnMessage();
    message("next");
};

export { turnOrder, showTurnMessage };
