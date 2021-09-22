"use strick";

import { turnOrder } from "./turn";

const selectDiceButton = $("#dice");
const selectDiceShow = $("#dice-show");
let $dice = [];

const getRandomInt = (min, max) => {
    const random = Math.random() * (max - min) + min;

    return Math.floor(random);
};

const setDiceNumber = (dice) => {
    $dice.push(dice);
};

const getDiceNumber = () => $dice;

const roleDice = () => {
    selectDiceButton.on("click", () => {
        const randomNumber = getRandomInt(1, 7);
        switch (randomNumber) {
            case 1:
                selectDiceShow.html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="dice-color">
                <g transform="translate(0,0)">
                    <path
                        d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z"
                        fill-opacity="1"></path>
                </g>
            </svg>`);
                setDiceNumber(randomNumber);
                break;
            case 2:
                selectDiceShow.html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="dice-color">
                    <g transform="translate(0,0)">
                        <path
                            d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                            fill-opacity="1"></path>
                    </g>
                </svg>`);
                setDiceNumber(randomNumber);
                break;
            case 3:
                selectDiceShow.html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="dice-color">
                        <g transform="translate(0,0)">
                            <path
                                d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                                fill-opacity="1"></path>
                        </g>
                    </svg>`);
                setDiceNumber(randomNumber);
                break;
            case 4:
                selectDiceShow.html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="dice-color">
                                <g transform="translate(0,0)">
                                   <path
                                      d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                                     fill-opacity="1"></path>
                                </g>
                            </svg>`);
                setDiceNumber(randomNumber);
                break;
            case 5:
                selectDiceShow.html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="dice-color">
                                    <g transform="translate(0,0)">
                                     <path
                                          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                                         fill-opacity="1"></path>
                                           </g>
                                         </svg>`);
                setDiceNumber(randomNumber);
                break;
            case 6:
                selectDiceShow.html(` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="dice-color">
                                 <g transform="translate(0,0)">
                                                <path
                                                  d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                                                    fill-opacity="1"></path>
                                          </g>
                                      </svg>`);
                setDiceNumber(randomNumber);
                break;
        }
        turnOrder(getDiceNumber());
    });
};

export { roleDice, setDiceNumber, getDiceNumber };
