"use strick";

const selectContainer = $(".get-color");
const selectIcon = $(".get-color__icon");
const selectDropdown = $(".drop-down");
let $color = "";

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

const colorSaver = () => {
    return $color;
};

const choseColor = () => {
    selectDropdown.on("click", (e) => {
        if (
            e.target.parentElement.id === "chose-red" ||
            e.target.id === "chose-red"
        ) {
            $color = "red";
            colorSaver();
        } else if (
            e.target.parentElement.id === "chose-green" ||
            e.target.id === "chose-green"
        ) {
            $color = "green";
            colorSaver();
        } else if (
            e.target.parentElement.id === "chose-blue" ||
            e.target.id === "chose-blue"
        ) {
            $color = "blue";
            colorSaver();
        } else if (
            e.target.parentElement.id === "chose-yellow" ||
            e.target.id === "chose-yellow"
        ) {
            $color = "yellow";
            colorSaver();
        }
    });
};

export { dropDown, choseColor, colorSaver };
