"use strick";

const selectMessage = $("#message");

const message = (message) => {
    if (message === "start") {
        selectMessage.html("please enter players name");
    } else if (message === "input") {
        selectMessage.html("please enter another player name");
    } else if (message === "invalid") {
        selectMessage.html("please input a number between 1 to 4 ");
    } else if (message === "color") {
        selectMessage.html("Please select a color for mead!!");
    } else if (message === "color-same") {
        selectMessage.html("Can`t pick same color for different players");
    } else if (message === "name") {
        selectMessage.html("Please select a name for player!!");
    } else if (message === "name-same") {
        selectMessage.html("Can`t pick same name for different colors");
    } else if (message === "full") {
        selectMessage.html(
            "All player input their names dice to set your turn"
        );
    } else if (message === "turn-give") {
        selectMessage.html("dice to set your turn");
    } else if (message === "next") {
        selectMessage.html("next Player");
    }
};

export { message as default };
