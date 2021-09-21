"use strick";

const start = ($color) => {
    $("#cel-1").append(
        '<div id="start" class="mead-container point point--start"></div>'
    );

    $(`#${$color}`).appendTo("#start");
};

export { start };
