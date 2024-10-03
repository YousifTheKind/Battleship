// to avoid eslint errors
import { describe, expect, test } from "@jest/globals";
import Ship from "./Ship";
// describe("Ship", () => {
//     test("isSunk();", () => {
//         const ship = Ship(2);
//         ship.hit();
//         expect(ship.IsSunk()).toBe(false);
//         ship.hit();
//         expect(ship.IsSunk()).toBe(true);
//     });
// });

describe("Gameboard", () => {
    test("placeShip();", () => {
        // testing placing a ship with a length of 2 somewhere
        // testing if I can overlap
        // testing if I can place a ship within 1 from it
        const gameboard = Gameboard();
        const board = gameboard.getBoard();
        const expectedBoard = gameboard.getBoard();
        const x = 2;
        const y = 2;
        const length = 2;
        const index = board.findIndex((square) => {
            square.x === x && square.y === y;
        });
        expectedBoard[index].ship = Ship(length);
        expect(placeShip(board, x, y, 2, "H").board).toBe(expectedBoard);
        expect(placeShip(board, x, y, 2, "H").changed).toBe(board);
        expect(placeShip(board, x + 1, y, 2, "H").changed).toBe(board);
        expect(placeShip(board, x - 1, y, 2, "H").changed).toBe(board);
        expect(placeShip(board, x + length, y, 2, "H").changed).toBe(board);
        expect(placeShip(board, x, y + 1, 2, "H").changed).toBe(board);
        expect(placeShip(board, x, y - 1, 2, "H").changed).toBe(board);
        expect(placeShip(board, x + 1, y - 1, 2, "H").changed).toBe(board);
        expect(placeShip(board, x - 1, y - 1, 2, "H").changed).toBe(board);
        expect(placeShip(board, x + length, y - 1, 2, "H").changed).toBe(board);
        expect(placeShip(board, x + 1, y + 1, 2, "H").changed).toBe(board);
        expect(placeShip(board, x - 1, y + 1, 2, "H").changed).toBe(board);
        expect(placeShip(board, x + length, y + 1, 2, "H").changed).toBe(board);
    });
    test("placeShip(); 2", () => {
        //testing if you can place a ship overboard
        const gameboard = Gameboard();
        const board = gameboard.getBoard();
        const expectedBoard = gameboard.getBoard();
        const x = 19;
        const y = 12;
        const length = 2;
        expect(placeShip(board, x, y, 2, "H").changed).toBe(false);
    });
    test("placeShip(); 2", () => {
        //testing if you can place a ship overboard
        const gameboard = Gameboard();
        const board = gameboard.getBoard();
        const expectedBoard = gameboard.getBoard();
        const x = 19;
        const y = 12;
        const length = 2;
        expect(placeShip(board, x, y, 2, "H").changed).toBe(false);
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
