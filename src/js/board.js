"use strick";

const selectBoard = $(".board");
/**
 * this function only created div for every cell and attach them to its container
 */
const initialCellBoard = () => {
    let zero = "";

    for (let countRow = 0; countRow < 5; countRow++) {
        for (let count = 0; count < 5; count++) {
            selectBoard.append(
                `<div id="cel-${
                    100 - countRow * 20 - count * 2
                }" class="odd-cel "><span class="odd-cel__number">${
                    100 - countRow * 20 - count * 2
                }</span></div>`
            );
            selectBoard.append(
                `<div id="cel-${
                    99 - countRow * 20 - count * 2
                }" class="even-cel "><span class="even-cel__number">${
                    99 - countRow * 20 - count * 2
                }</span></div>`
            );
        }
        for (let count = 0; count < 5; count++) {
            countRow === 4 ? (zero = "0") : (zero = "");
            selectBoard.append(
                `<div id="cel-${
                    81 - countRow * 20 + count * 2
                }" class="even-cel "><span class="even-cel__number">${zero}${
                    81 - countRow * 20 + count * 2
                }</span></div>`
            );
            countRow === 4 && count !== 4 ? (zero = "0") : (zero = "");
            selectBoard.append(
                `<div id="cel-${
                    82 - countRow * 20 + count * 2
                }" class="odd-cel "><span class="odd-cel__number">${zero}${
                    82 - countRow * 20 + count * 2
                }</span></div>`
            );
        }
    }
};

/**
 * make number of cells doesn't cover by snake
 */
const startCel = [];
// [
//     84, 87, 78, 51, 50, 31, 79, 30, 45, 27, 17, 36, 41, 40, 34, 11, 14, 7, 2,
// ];
const endCel = [];
//  [19, 22, 77];
const endEndCel = [];
//  [13, 59];

const allCell = () => {
    let remain = [];
    for (let count = 1; count <= 100; count++) {
        remain[count - 1] = count;
    }
    remain = remain.map((element) =>
        startCel.includes(element) ? "start" : element
    );
    remain = remain.map((element) =>
        endCel.includes(element) ? "end" : element
    );
    remain = remain.map((element) =>
        endEndCel.includes(element) ? "end-end" : element
    );

    return remain;
};

/**
 * this add class to position number cell as flex
 * @param {*} filter get return value of all cell: ;
 */
const positionCelNumbers = (filter) => {
    for (let count = 1; count <= 100; count++) {
        if (filter[count - 1] === "start") {
            $(`#cel-${count}`).addClass("cel--start");
        } else if (filter[count - 1] === "end") {
            $(`#cel-${count}`).addClass("cel--end");
        } else if (filter[count - 1] === "end-end") {
            $(`#cel-${count}`).addClass("cel--end-end");
        } else {
            $(`#cel-${count}`).addClass("cel--start-end");
        }
    }
};
/**
 * daw line on board
 *
 */
const drawLine = ($startCell, $finishCell, rotate = "") => {
    const $selectStart = $(`#cel-${$startCell}`);
    const $selectFinish = $(`#cel-${$finishCell}`);
    const offsetStart = $selectStart.offset();
    const offsetFinish = $selectFinish.offset();
    const height = Math.abs(offsetStart.top - offsetFinish.top);
    const width = Math.abs(offsetStart.left - offsetFinish.left);
    const boardHeight = selectBoard.height();
    const boardLeft = selectBoard.offset().left;
    const centering = 5;
    let angel = Math.PI - Math.atan2(height, width);

    const elementWidth = Math.pow(
        Math.pow(width, 2) + Math.pow(height, 2),
        1 / 2
    );

    const percentWidth = (elementWidth / boardHeight) * 100;

    let percentTop;
    let percentLeft;
    let $color;
    if ($startCell > $finishCell) {
        $color = "red";
        percentTop = ((offsetStart.top + height / 2) / boardHeight) * 100;
    } else {
        $color = "blue";
        percentTop = ((offsetFinish.top + height / 2) / boardHeight) * 100;
    }

    if (
        rotate === "right-ladder" ||
        rotate === "vertical" ||
        rotate === "left-snake"
    ) {
        percentLeft =
            ((offsetStart.left + width / 2 - boardLeft) / boardHeight) * 100;
        percentLeft -= percentWidth / 2;
        if (rotate === "left-snake") {
            angel = -angel;
        }
    } else if (rotate === "left-ladder" || rotate === "right-snake") {
        percentLeft =
            ((offsetFinish.left + width / 2 - boardLeft) / boardHeight) * 100;
        percentLeft -= percentWidth / 2;
        if (rotate === "left-ladder") {
            angel = -angel;
        }
    }

    const style = {
        position: "absolute",

        "z-index": 100,
        top: `${percentTop + centering}vh`,
        left: `${percentLeft + centering}vh`,
        width: `${percentWidth}vh`,

        "border-radius": "10px",

        transform: `rotate(${angel}rad)`,
        "border-bottom": `5px solid ${$color}`,
    };
    selectBoard.prepend(`<div id="line-${$startCell}-${$finishCell}"></div>`);
    $(`#line-${$startCell}-${$finishCell}`).css(style);
};

export { initialCellBoard, positionCelNumbers, allCell, drawLine };
