import Ship from "./Ship.js";
export function Gameboard() {
    const board = [];
    const ships = [];
    const sunkenShips = [];
    for (let i = 0; i < 100; i++) {
        board[i] = {
            x: Math.floor(i / 10),
            y: i % 10,
            ship: null,
            hit: false,
            miss: false,
        };
    }
    const placeShip = (board, x, y, length, orientation) => {
        const newBoard = [...board];
        let changed = false;
        let errorMsg = null;
        function checkValidity() {
            if (x > 9 || x < 0 || y > 9 || y < 0) {
                errorMsg = "You're going overboard!";
                return false;
            } else if (2 > length > 5) {
                errorMsg = "Length should be between 2 & 5";
                return false;
            }
            if (orientation != "V" && orientation != "H") {
                errorMsg = "orientation should be 'H' or 'V'";
                return false;
            }
            if (orientation == "H") {
                if (x + (length - 1) > 9) {
                    errorMsg = "You're going overboard!";
                    return false;
                }

                for (let i = 0; i < length; i++) {
                    const targetSquare = newBoard.find(
                        (square) => square.x === x + i && square.y === y
                    );

                    if (targetSquare.ship) {
                        errorMsg = "There is already a ship there!";
                        return false;
                    }
                }
            }
            if (orientation == "V") {
                if (y + (length - 1) > 9) {
                    errorMsg = "You're going overboard!";
                    return false;
                }

                for (let i = 0; i < length; i++) {
                    const targetSquare = newBoard.find(
                        (square) => square.x === x && square.y === y + i
                    );
                    if (targetSquare.ship) {
                        errorMsg = "There is already a ship there!";
                        return false;
                    }
                }
            }
            return true;
        }
        if (checkValidity()) {
            if (orientation === "H") {
                const ship = Ship(length);
                for (let i = 0; i < length; i++) {
                    const targetSquare = newBoard.find(
                        (square) => square.x === x + i && square.y === y
                    );
                    targetSquare.ship = ship;
                }
                changed = true;
                ships.push(ship);
            }
            if (orientation === "V") {
                const ship = Ship(length);
                for (let i = 0; i < length; i++) {
                    const targetSquare = newBoard.find(
                        (square) => square.x === x && square.y === y + i
                    );
                    targetSquare.ship = ship;
                }
                changed = true;
                ships.push(ship);
            }
        }

        const getNewBoard = () => newBoard;
        return { getNewBoard, changed, errorMsg };
    };

    const receiveAttack = (board, x, y) => {
        const newBoard = [...board];
        let errorMsg = null;
        let validAttack = null;
        let sunk = null;
        const getNewBoard = () => newBoard;
        const square = newBoard.find(
            (square) => square.x === x && square.y === y
        );
        function checkValidity() {
            if (x > 9 || x < 0 || y > 9 || y < 0) {
                errorMsg = "Attack is off the board.";
                return false;
            }
            if (square.hit || square.miss) {
                errorMsg = "Square has already been attacked.";
                return false;
            }
            return true;
        }

        if (checkValidity()) {
            validAttack = true;
            if (square.ship) {
                square.ship.hit();
                sunk = square.ship.IsSunk();
                if (sunk) sunkenShips.push(square.ship);
                square.hit = true;
            }
            if (!square.ship) {
                square.miss = true;
            }
        }
        return {
            getNewBoard,
            errorMsg,
            validAttack,
            sunk,
        };
    };
    const checkWinner = () => {
        if (sunkenShips.length >= 5) {
            return true;
        }

        return false;
    };
    const getBoard = () => board;

    return { getBoard, placeShip, receiveAttack, checkWinner };
}
