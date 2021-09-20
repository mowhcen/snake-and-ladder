"use strick";

const selectBoard = $(".board");
/**
 * make number of cells doesn't cover by snake
 */
const startCel = [82, 61, 59, 45, 40, 34, 23, 19, 15, 13, 6, 3, 2, 1];
const endCel = [78, 41, 22, 11];

const endEndCel = [84, 68];

const centering = [51, 50, 31, 30];

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
    remain = remain.map((element) =>
        centering.includes(element) ? "centering" : element
    );

    console.log(remain);
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
        } else if (filter[count - 1] === "centering") {
            $(`#cel-${count}`).addClass("cel--centering");
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
    let $shape;
    let scale = "Y";

    if ($startCell > $finishCell) {
        $shape = "snake";
        percentTop = ((offsetStart.top + height / 2) / boardHeight) * 100;
    } else {
        $shape = "ladder";
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
            scale = "X";
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
        top: `${percentTop + centering / 4}vh`,
        left: `${percentLeft + centering}vh`,
        width: `${percentWidth}vh`,
        height: `${percentWidth / 6}vh`,

        transform: `rotate(${angel}rad) scale${scale}(-1)`,
    };
    selectBoard.prepend(`<div id="line-${$startCell}-${$finishCell}"></div>`);

    if ($shape === "snake") {
        $(`#line-${$startCell}-${$finishCell}`).append(
            ` <img id="snake" src="./images/snake.png" alt="snake shape">`
        );
    } else if ($shape === "ladder") {
        $(`#line-${$startCell}-${$finishCell}`).append(
            ` <img id="ladder" src="./images/ladder.png" alt="ladder shape">`
        );
    }

    $(`#line-${$startCell}-${$finishCell}`).css(style);
};
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
    /**
     * chose where the ladder placed
     */
    drawLine(3, 60, "left-ladder");
    drawLine(6, 27, "right-ladder");
    drawLine(11, 70, "vertical");
    drawLine(35, 56, "left-ladder");
    drawLine(68, 93, "vertical");
    drawLine(64, 99, "left-ladder");
    /**
     * chose where the snake placed
     */
    drawLine(37, 1, "right-snake");
    drawLine(25, 5, "vertical");
    drawLine(47, 9, "left-snake");
    drawLine(65, 59, "right-snake");
    drawLine(87, 54, "vertical");
    drawLine(96, 61, "right-snake");
    drawLine(92, 69, "vertical");

    /**
     * change position of number to dont covered by snake and latter
     */
    positionCelNumbers(allCell());
};

export { initialCellBoard, positionCelNumbers, allCell, drawLine };
