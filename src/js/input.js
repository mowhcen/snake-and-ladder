"use strick";

import message from "./message";
import { start } from "./move";

let limit = 0;
const selectInputSubmit = $("#initial-game");
const selectInputCount = $("#count-player");
const selectInputNaming = $("#name-player");
const selectInputReset = $("#reset-page");
let $count = 0;

const namingPlayer = (count) => {
    selectInputNaming.on("change", (e) => {
        limit++;
        if (limit <= count) {
            $(".player-container").append(`
            <div class="player-list">
                 <span class="player-name">${limit}. ${e.target.value}</span>
                 <figure class="mead__head mead__color--green"></figure>
            </div>
            `);
        } else {
            return;
        }
        e.target.value = "";
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
