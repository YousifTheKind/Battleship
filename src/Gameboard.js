import Ship from "./Ship.js";
export function Gameboard() {
    const ships = [];
    const board = [];
    for (let i = 0; i < 100; i++) {
        board[i] = {
            x: i % 10,
            y: Math.floor(i / 10),
            ship: null,
            hit: false,
            miss: false,
        };
    }
    const findSquare = (board, x, y) => {
        return board.find((square) => square.x == x && square.y == y);
    };
    const placeShip = (board, x, y, length, orientation) => {
        let changed = false;
        let errorMsg = null;
        x = parseInt(x);
        y = parseInt(y);
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
                    const targetSquare = findSquare(board, x + i, y);
                    if (targetSquare) {
                        if (targetSquare.ship) {
                            errorMsg = "There is already a ship there!";
                            return false;
                        }
                    } else {
                        errorMsg = "Square not found";
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
                    const targetSquare = findSquare(board, x, y + i);
                    if (targetSquare) {
                        if (targetSquare.ship) {
                            errorMsg = "There is already a ship there!";
                            return false;
                        }
                    } else {
                        errorMsg = "Square not found";
                        return false;
                    }
                }
            }
            return true;
        }
        if (checkValidity()) {
            const ship = Ship(length);
            if (orientation === "H") {
                for (let i = 0; i < length; i++) {
                    const targetSquare = findSquare(board, x + i, y);

                    targetSquare.ship = ship;
                }
            }
            if (orientation === "V") {
                for (let i = 0; i < length; i++) {
                    const targetSquare = findSquare(board, x, y + i);

                    targetSquare.ship = ship;
                }
            }
            changed = true;
            ships.push(ship);
        }

        return { changed, errorMsg };
    };

    const receiveAttack = (board, x, y) => {
        let errorMsg = null;
        const square = findSquare(board, x, y);

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
            if (square.ship) {
                square.ship.hit();
                square.hit = true;
            }
            if (!square.ship) {
                square.miss = true;
            }
        }
        return {
            errorMsg,
        };
    };
    const checkWinner = () => {
        return ships.every((ship) => ship.IsSunk());
    };
    const getBoard = () => board;
    const getNumberOfShips = () => ships.length;
    return {
        getBoard,
        placeShip,
        receiveAttack,
        checkWinner,
        getNumberOfShips,
    };
}
