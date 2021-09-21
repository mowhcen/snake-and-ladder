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
            if ($limit + 1 === counter) {
                message("full");
            } else {
                message("input");
            }

            $(".player-container").append(`<div class="player-list">
                         <span class="player-name">${
                             $limit + 1
                         }. ${$name}</span>
                         <figure class="mead__pick mead__color--${$color}"></figure>
                    </div>`);
            colors[$limit] = $color;
            names[$limit] = $name;
            $limit++;
            start($color);
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
        $count = Number(selectInputCount.val());
        if ($count > 0 && $count < 5) {
            namingPlayer($count);
            console.log($count);
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
