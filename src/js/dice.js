const selectDiceButton = $("#dice");
const selectDiceShow = $("#dice-show");

const getRandomInt = (min, max) => {
    const random = Math.random() * (max - min) + min;

    return Math.floor(random);
};

const roleDice = () => {
    selectDiceButton.on("click", () => {
        const randomNumber = getRandomInt(1, 7);
        if (randomNumber === 1) {
            selectDiceShow.html(1);
        } else if (randomNumber === 2) {
            selectDiceShow.html(2);
        } else if (randomNumber === 3) {
            selectDiceShow.html(3);
        } else if (randomNumber === 4) {
            selectDiceShow.html(4);
        } else if (randomNumber === 5) {
            selectDiceShow.html(5);
        } else if (randomNumber === 6) {
            selectDiceShow.html(6);
        }
    });
};
export { roleDice as default };
