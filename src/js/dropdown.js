"use strick";

const selectContainer = $(".get-color");
const selectIcon = $(".get-color__icon");
const selectDropdown = $(".drop-down");

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
    $(".radio").on("input", () => {
        selectContainer.removeClass("active");
        selectIcon.removeClass("push");
        selectDropdown.removeClass("show");
    });
};

export { dropDown as default };
