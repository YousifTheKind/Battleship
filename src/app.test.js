// to avoid eslint errors
import { describe, expect, test } from "@jest/globals";
import Ship from "./Ship.js";
import { Gameboard } from "./Gameboard.js";
describe("Ship", () => {
    test("isSunk();", () => {
        const ship = Ship(2);
        ship.hit();
        expect(ship.IsSunk()).toBe(false);
        ship.hit();
        expect(ship.IsSunk()).toBe(true);
    });
});

describe("Gameboard", () => {
    test("Place a ship somewhere legal", () => {
        const expectedBoard = [...Gameboard().getBoard()];
        const board = Gameboard().getBoard();
        const x = 2;
        const y = 2;
        const length = 2;
        const ship = Ship(length);

        expectedBoard.find((square) => square.x === x && square.y === y).ship =
            ship;
        expectedBoard.find(
            (square) => square.x === x + 1 && square.y === y
        ).ship = ship;
        const obj = Gameboard().placeShip(board, x, y, 2, "H");
        expect(JSON.stringify(obj.getNewBoard())).toBe(
            JSON.stringify(expectedBoard)
        );
        expect(obj.errorMsg).toBeNull();
        expect(obj.changed).toBeTruthy();
    });

    test("Placing a ship where there is already a ship", () => {
        const gameboard = Gameboard();
        const board = gameboard.getBoard();
        const expectedBoard = gameboard.getBoard();
        const x = 2;
        const y = 2;
        const length = 2;
        const ship = Ship(length);
        gameboard.placeShip(board, x, y, 5, "H");
        expect(gameboard.placeShip(board, x, y, 2, "H").changed).toBeFalsy();
        expect(gameboard.placeShip(board, x, y, 2, "H").errorMsg).toBeTruthy();

        expect(gameboard.placeShip(board, x, y, 2, "H").errorMsg).toBeTruthy();
        expect(
            gameboard.placeShip(board, x + 1, y, 2, "H").errorMsg
        ).toBeTruthy();
        expect(
            gameboard.placeShip(board, x + 2, y, 2, "H").errorMsg
        ).toBeTruthy();
        expect(
            gameboard.placeShip(board, x + 3, y, 2, "H").errorMsg
        ).toBeTruthy();
        expect(
            gameboard.placeShip(board, x + 4, y, 2, "H").errorMsg
        ).toBeTruthy();
    });
    test("Placing a ship outside the board", () => {
        const gameboard = Gameboard();
        const board = gameboard.getBoard();
        expect(gameboard.placeShip(board, 19, 12, 2, "H").changed).toBeFalsy();
        expect(
            gameboard.placeShip(board, 19, 12, 2, "H").errorMsg
        ).toBeTruthy();
        expect(gameboard.placeShip(board, 8, 2, 3, "H").errorMsg).toBeTruthy();
        expect(gameboard.placeShip(board, 5, 8, 3, "V").errorMsg).toBeTruthy();
    });

    // test("receiveAttack();", () => {
    //     // attacking an off board square
    //     const gameboard = Gameboard();
    //     const board = gameboard.getBoard();
    //     expect(receiveAttack(board, 55, 2).changed).toBe(false);
    // });
    // test("receiveAttack(); 2", () => {
    //     // attacking a ship
    //     const gameboard = Gameboard();
    //     const board = gameboard.getBoard();
    //     const expectedBoard = gameboard.getBoard();
    //     const x = 2;
    //     const y = 2;
    //     const length = 2;
    //     const index = board.findIndex((square) => {
    //         square.x === x && square.y === y;
    //     });
    //     placeShip(board, x, y, length, "V");

    //     expectedBoard[index].ship = Ship(length);
    //     expectedBoard[index].ship.hit();
    //     expect(receiveAttack(board, x, y).board).toBe(expectedBoard);
    // });
    // test("receiveAttack(); 3", () => {
    //     // attacking a null square
    //     const gameboard = Gameboard();
    //     const board = gameboard.getBoard();
    //     const expectedBoard = gameboard.getBoard();
    //     const x = 2;
    //     const y = 2;
    //     const length = 2;
    //     const index = board.findIndex((square) => {
    //         square.x === x && square.y === y;
    //     });
    //     expectedBoard[index].ship = Ship(length);
    //     expectedBoard[index].miss = true;
    //     expect(receiveAttack(board, x, y).board).toBe(expectedBoard);
    // });
});
