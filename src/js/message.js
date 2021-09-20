"use strick";

const selectMessage = $("#message");

const message = (message) => {
    if (message === "start") {
        selectMessage.html("please enter players name");
    } else if (message === "invalid") {
        selectMessage.html("please input a number between 1 to 4 ");
    }
};

export { message as default };
