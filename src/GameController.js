import { Player } from "./Player.js";

function newGame() {
    const realPlayer = Player();
    const realPlayerGameboard = realPlayer.Gameboard;
    const realPlayerBoard = realPlayerGameboard.getBoard();
    realPlayerGameboard.placeShip(realPlayerBoard, 2, 0, 2, "H");
    realPlayerGameboard.placeShip(realPlayerBoard, 2, 2, 3, "H");
    realPlayerGameboard.placeShip(realPlayerBoard, 2, 4, 3, "H");
    realPlayerGameboard.placeShip(realPlayerBoard, 2, 6, 4, "H");
    realPlayerGameboard.placeShip(realPlayerBoard, 2, 8, 5, "H");
    const botPlayer = Player();
    const botPlayerGameboard = botPlayer.Gameboard;
    const botPlayerBoard = botPlayerGameboard.getBoard();
    botPlayerGameboard.placeShip(botPlayerBoard, 1, 0, 2, "H");
    botPlayerGameboard.placeShip(botPlayerBoard, 3, 2, 3, "H");
    botPlayerGameboard.placeShip(botPlayerBoard, 5, 2, 3, "H");
    botPlayerGameboard.placeShip(botPlayerBoard, 7, 2, 4, "H");
    botPlayerGameboard.placeShip(botPlayerBoard, 9, 2, 5, "H");

    return { botPlayerBoard, realPlayerBoard };
}

export { newGame };
