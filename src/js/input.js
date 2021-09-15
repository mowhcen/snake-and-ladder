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

const count = $("#count-player");

count.on("change", (element) => {
    namingPlayer(element.target.value);
    count.attr("disabled", "disabled");
});
