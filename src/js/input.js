let limit = 0;
const selectInputSubmit = $("#initial-game");
const selectInputCount = $("#count-player");
const selectInputNaming = $("#name-player");
const selectInputReset = $("#reset-page");

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

const initialInput = () => {
    selectInputSubmit.on("submit", (element) => {
        namingPlayer(selectInputCount.val());
        selectInputCount.attr("disabled", "disabled");
        element.preventDefault();
    });

    selectInputReset.on("click", () => {
        location.reload();
    });
};

export { initialInput as default };
