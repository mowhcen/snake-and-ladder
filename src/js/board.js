/**
 * this function only created div for every cell and attach them to its container
 */
const initialCellBoard = () => {
    let zero = "";

    for (let countRow = 0; countRow < 5; countRow++) {
        for (let count = 0; count < 5; count++) {
            $(".board").append(
                `<div class="odd-cel cel-${
                    100 - countRow * 20 - count * 2
                }"><span class="odd-cel__number">${
                    100 - countRow * 20 - count * 2
                }</span></div>`
            );
            $(".board").append(
                `<div class="even-cel cel-${
                    99 - countRow * 20 - count * 2
                }"><span class="even-cel__number">${
                    99 - countRow * 20 - count * 2
                }</span></div>`
            );
        }
        for (let count = 0; count < 5; count++) {
            countRow === 4 ? (zero = "0") : (zero = "");
            $(".board").append(
                `<div class="even-cel cel-${
                    81 - countRow * 20 + count * 2
                }"><span class="even-cel__number">${zero}${
                    81 - countRow * 20 + count * 2
                }</span></div>`
            );
            countRow === 4 && count !== 4 ? (zero = "0") : (zero = "");
            $(".board").append(
                `<div class="odd-cel cel-${
                    82 - countRow * 20 + count * 2
                }"><span class="odd-cel__number">${zero}${
                    82 - countRow * 20 + count * 2
                }</span></div>`
            );
        }
    }
};

/**
 * make number of cells doesn't cover by snake
 */
const startCel = [83, 84, 87, 78, 51, 50, 31, 30, 45, 41, 40, 34, 11, 14, 7, 2];
const endCel = [19, 22];
const endEndCel = [];

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
            $(`.cel-${count}`).addClass("cel--start");
        } else if (filter[count - 1] === "end") {
            $(`.cel-${count}`).addClass("cel--end");
        } else if (filter[count - 1] === "end-end") {
            $(`.cel-${count}`).addClass("cel--end-end");
        } else {
            $(`.cel-${count}`).addClass("cel--start-end");
        }
    }
};

export { initialCellBoard, positionCelNumbers, allCell };
