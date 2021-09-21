"use strick";

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

const namingPlayer = (count) => {
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
            $limit <= count &&
            $color !== "" &&
            !colors.includes($color) &&
            $name !== "" &&
            !names.includes($name)
        ) {
            $limit++;
            $(".player-container").append(`<div class="player-list">
                         <span class="player-name">${$limit}. ${$name}</span>
                         <figure class="mead__pick mead__color--${$color}"></figure>
                    </div>`);
            colors[count] = $color;
            names[count] = $name;
            start($color);
            message("input");
        } else if ($color === "") {
            message("color");
        } else if (colors.includes($color)) {
            message("color-same");
        } else if ($name === "") {
            message("name");
        } else if (names.includes($name)) {
            message("name-same");
        }
        element.preventDefault();
    });
};

const initialGame = () => {
    selectInputSubmit.on("submit", (element) => {
        $count = Number(selectInputCount.val());
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

export { initialGame as default };
