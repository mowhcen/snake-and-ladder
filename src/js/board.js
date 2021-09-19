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
const startCel = [
    84, 87, 78, 51, 50, 31, 79, 30, 45, 27, 17, 36, 41, 40, 34, 11, 14, 7, 2,
];
const endCel = [19, 22, 77];
const endEndCel = [13, 59];

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
const drawLine = ($startCell, $finishCell) => {
    const $start = $(`#cel-${$startCell}`);
    const $finish = $(`#cel-${$finishCell}`);
    const offsetStart = $start.offset();
    const offsetFinish = $finish.offset();
    const height = offsetStart.top - offsetFinish.top;
    const width = offsetStart.left - offsetFinish.left;

    const angel = Math.PI - Math.atan2(Math.abs(height), Math.abs(width));
    console.log($start, offsetStart, height);
    console.log($finish, offsetFinish, width);
    console.log(angel);
    // const widthStart = $startPoint.width();
    // const heightStart = $startPoint.height();

    // const centerStartX = offsetStart.left + widthStart / 3;
    // const centerStartY = offsetStart.top + heightStart / 3;

    // console.log(centerStartX, centerStartY);

    //
    // const widthFinish = $finishPoint.width();
    // const heightFinish = $finishPoint.height();

    // const centerFinishX = offsetFinish.left + widthFinish / 3;
    // const centerFinishY = offsetFinish.top + heightFinish / 3;

    // const height = Math.abs(centerStartY - centerFinishY);
    // const width = centerStartX - centerFinishX;
    // console.log(height, width);
    const style = {
        position: "absolute",
        "z-index": 100,
        top: `45vh`,
        left: `22vh`,
        width: `36vh`,

        "border-radius": "10px",

        transform: `rotate(2.5535900500422257rad)`,
        "border-bottom": `5px solid red`,
    };
    selectBoard.prepend(`<div class="line"></div>`);
    $(`.line`).css(style);
};

export { initialCellBoard, positionCelNumbers, allCell, drawLine };
