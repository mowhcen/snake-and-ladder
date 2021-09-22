"use strick";

import { showTurnMessage, turnOrder } from "./turn";

import message from "./message";
import { start } from "./move";

const selectInputSubmit = $("#initial-game");
const selectInputCount = $("#count-player");
const selectInputNaming = $("#name-player");
const selectInputReset = $("#reset-page");
const selectFormGetName = $("#get-info");
const selectRadios = $(".radio");
let $count = 0;
let $limit = 0;
let $name = "";
let $color = "";
let colors = [];
let names = [];

const getCount = () => $count;

const setCount = (count) => {
    $count = count;
};

const getColors = () => colors;

const setColors = (color) => {
    colors.push(color);
};

const getNames = () => names;

const setNames = (name) => {
    names.push(name);
};

const namingPlayer = (counter) => {
    selectRadios.on("change", (e) => {
        if (e.target.checked) {
            $color = e.target.value;
        }
    });
    selectInputNaming.on("change", (e) => {
        $name = e.target.value;
    });

    selectFormGetName.on("submit", (element) => {
        if (
            $limit < counter &&
            $color !== "" &&
            !colors.includes($color) &&
            $name !== "" &&
            !names.includes($name)
        ) {
            console.log($limit);

            $(".player-container").append(`<div class="player-list">
                         <span id="player${$limit}" class="player-name">${
                $limit + 1
            }. ${$name}</span>
                         <figure class="mead__pick mead__color--${$color}"></figure>
                    </div>`);
            setColors($color);
            setNames($name);
            $limit++;
            start($color);
            if ($limit === counter) {
                message("full");
                showTurnMessage();
            } else {
                message("input");
            }
        } else if ($color === "") {
            message("color");
        } else if (colors.includes($color)) {
            message("color-same");
        } else if ($name === "") {
            message("name");
        } else if (names.includes($name)) {
            message("name-same");
        }
        selectInputNaming.val("");
        element.preventDefault();
    });
};

const initialGame = () => {
    selectInputSubmit.on("submit", (element) => {
        setCount(Number(selectInputCount.val()));
        if ($count > 0 && $count < 5) {
            namingPlayer($count);
            selectInputCount.attr("disabled", "disabled");
            element.preventDefault();
            message("start");
        } else {
            message("invalid");
            element.preventDefault();
        }
    });

    selectInputReset.on("click", () => {
        location.reload();
    });
};

export { initialGame, getNames, getColors, getCount };
