"use strick";

import message from "./message";
import { start } from "./move";

const selectInputSubmit = $("#initial-game");
const selectInputCount = $("#count-player");
const selectInputNaming = $("#name-player");
const selectInputReset = $("#reset-page");
const selectFormGetName = $("#get-info");
const selectRedRadio = $("#check-red");
const selectGreenRadio = $("#check-green");
const selectBlueRadio = $("#check-blue");
const selectYellowRadio = $("#check-yellow");
let $count = 0;
let $limit = 0;
let $color = "";

const namingPlayer = (count) => {
    $(".radio").on("change", (e) => {
        if (e.target.checked) {
            $color = e.target.value;
            console.log($color);
        }
    });
    selectFormGetName.on("submit", (element) => {
        if ($limit <= count) {
            $limit++;
            $(".player-container").append(`<div class="player-list">
                         <span class="player-name">${$limit}. ${selectInputNaming.val()}</span>
                         <figure class="mead__pick mead__color--${$color}"></figure>
                    </div>`);
        } else {
            return;
        }
        element.preventDefault();
    });
};

const initialGame = () => {
    selectInputSubmit.on("submit", (element) => {
        $count = Number(selectInputCount.val());
        console.log($count);
        if ($count > 0 && $count < 5) {
            start();
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
