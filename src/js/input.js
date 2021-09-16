let limit = 0;
const namingPlayer = (count) => {
    $("#name-player").on("change", (e) => {
        limit++;
        console.log(limit);
        console.log(count);
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
    });
};

const inputPlayerName = $("#count-player");

inputPlayerName.on("change", (element) => {
    namingPlayer(element.target.value);
    inputPlayerName.attr("disabled", "disabled");
});
