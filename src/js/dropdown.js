"use strick";

const selectContainer = $(".get-color");
const selectIcon = $(".get-color__icon");
const selectDropdown = $(".drop-down");
const choseRed = $("#chose-red");
const choseYellow = $("#chose-yellow");
const choseBlue = $("#chose-blue");
const choseGreen = $("#chose-green");

const dropDown = () => {
    selectContainer.on("click", (e) => {
        if (!selectContainer.hasClass("active")) {
            selectContainer.addClass("active");
            selectIcon.addClass("push");
            selectDropdown.addClass("show");
        } else if ($(e.target).hasClass("get-color")) {
            selectContainer.removeClass("active");
            selectIcon.removeClass("push");
            selectDropdown.removeClass("show");
        }
    });
};

const colorSaver = (color = "") => {
    console.log(color);
};

const choseColor = () => {
    selectDropdown.on("click", (e) => {
        if (
            e.target.parentElement.id === "chose-red" ||
            e.target.id === "chose-red"
        ) {
            colorSaver("red");
        } else if (
            e.target.parentElement.id === "chose-green" ||
            e.target.id === "chose-green"
        ) {
            colorSaver("green");
        } else if (
            e.target.parentElement.id === "chose-blue" ||
            e.target.id === "chose-blue"
        ) {
            colorSaver("blue");
        } else if (
            e.target.parentElement.id === "chose-yellow" ||
            e.target.id === "chose-yellow"
        ) {
            colorSaver("yellow");
        }
    });
};

export { dropDown, choseColor };
