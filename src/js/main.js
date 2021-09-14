// create cell with numbers with js
let zero = "";

for (let countRow = 0; countRow < 5; countRow++) {
    for (let count = 0; count < 5; count++) {
        $(".board").append(
            `<div class="odd-cel"><span class="cel-number">${
                100 - countRow * 20 - count * 2
            }</span></div>`
        );
        $(".board").append(
            `<div class="even-cel"><span class="cel-number">${
                99 - countRow * 20 - count * 2
            }</span></div>`
        );
    }
    for (let count = 0; count < 5; count++) {
        countRow === 4 ? (zero = "0") : (zero = "");
        $(".board").append(
            `<div class="even-cel"><span class="cel-number">${zero}${
                81 - countRow * 20 + count * 2
            }</span></div>`
        );
        countRow === 4 && count !== 4 ? (zero = "0") : (zero = "");
        $(".board").append(
            `<div class="odd-cel"><span class="cel-number">${zero}${
                82 - countRow * 20 + count * 2
            }</span></div>`
        );
    }
}
