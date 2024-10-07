// to avoid eslint errors
import { beforeEach, describe, expect, test } from "@jest/globals";
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
    describe("placeShip", () => {
        beforeEach(() => {});
        const gameboard = Gameboard();
        const board = gameboard.getBoard();
        const expectedBoard = [...Gameboard().getBoard()];
        const x = 2;
        const y = 2;
        test("Place a ship somewhere legal", () => {
            const length = 2;
            const ship = Ship(length);

            expectedBoard.find(
                (square) => square.x === x && square.y === y
            ).ship = ship;
            expectedBoard.find(
                (square) => square.x === x && square.y === y + 1
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
            gameboard.placeShip(board, x, y, 5, "H");
            expect(
                gameboard.placeShip(board, x, y, 2, "H").changed
            ).toBeFalsy();
            expect(
                gameboard.placeShip(board, x, y, 2, "H").errorMsg
            ).toBeTruthy();
            expect(
                gameboard.placeShip(board, x, y + 1, 2, "H").errorMsg
            ).toBeTruthy();
            expect(
                gameboard.placeShip(board, x, y + 2, 2, "H").errorMsg
            ).toBeTruthy();
            expect(
                gameboard.placeShip(board, x, y + 3, 2, "H").errorMsg
            ).toBeTruthy();
            expect(
                gameboard.placeShip(board, x, y + 4, 2, "H").errorMsg
            ).toBeTruthy();
        });
        test("Placing a ship outside the board", () => {
            const gameboard = Gameboard();
            const board = gameboard.getBoard();
            expect(
                gameboard.placeShip(board, 19, 12, 2, "H").changed
            ).toBeFalsy();
            expect(
                gameboard.placeShip(board, 19, 12, 2, "H").errorMsg
            ).toBeTruthy();
            expect(
                gameboard.placeShip(board, 8, 2, 3, "H").errorMsg
            ).toBeTruthy();
            expect(
                gameboard.placeShip(board, 5, 8, 3, "V").errorMsg
            ).toBeTruthy();
        });
    });
    describe("receiveAttack", () => {
        test("Attacking a square off the board", () => {
            const gameboard = Gameboard();
            const board = gameboard.getBoard();
            expect(
                gameboard.receiveAttack(board, 55, 2).validAttack
            ).toBeFalsy();
            expect(gameboard.receiveAttack(board, 55, 2).errorMsg).toBeTruthy();
        });
        test("Attacking a ship", () => {
            const gameboard = Gameboard();
            const board = gameboard.getBoard();
            const expectedBoard = [...board];

            const x = 0;
            const y = 1;
            const length = 2;
            gameboard.placeShip(board, x, y, length, "V");

            expectedBoard
                .find((square) => square.x === x && square.y === y)
                .ship.hit();

            const obj = gameboard.receiveAttack(board, x, y);
            expect(obj.getNewBoard()).toEqual(expectedBoard);
            expect(obj.validAttack).toBeTruthy();
            expect(obj.errorMsg).toBeFalsy();
        });
        test("Attacking a square with no ship", () => {
            const gameboard = Gameboard();
            const board = gameboard.getBoard();
            const expectedBoard = [...board];
            const x = 2;
            const y = 2;
            expectedBoard.find((square) => square.x === x && square.y === y)
                .miss;
            const obj = gameboard.receiveAttack(board, x, y);
            expect(obj.getNewBoard()).toStrictEqual(expectedBoard);
            expect(obj.validAttack).toBeTruthy();
            expect(obj.errorMsg).toBeFalsy();
        });
        test("Attacking a square that's been attacked before", () => {
            const gameboard = Gameboard();
            const board = gameboard.getBoard();
            const newBoard = gameboard.receiveAttack(board, 2, 2).getNewBoard();
            expect(
                gameboard.receiveAttack(newBoard, 2, 2).errorMsg
            ).toBeTruthy();
            expect(
                gameboard.receiveAttack(newBoard, 2, 2).validAttack
            ).toBeFalsy();
        });

        test("Attack a square until ship is sunk", () => {
            const gameboard = Gameboard();
            const board = gameboard.getBoard();
            const x = 2;
            const y = 2;
            const length = 3;
            gameboard.placeShip(board, x, y, length, "V");
            gameboard.receiveAttack(board, x, y);
            gameboard.receiveAttack(board, x + 1, y);
            const newBoard = gameboard
                .receiveAttack(board, x + 2, y)
                .getNewBoard();
            const square = newBoard.find(
                (square) => square.x === x && square.y === y
            );
            expect(square.ship.IsSunk()).toBeTruthy();
        });
    });
    describe("check winner", () => {
        test("Check winner when all ships are sunk", () => {
            const gameboard = Gameboard();
            const board = gameboard.getBoard();

            gameboard.placeShip(board, 0, 0, 2, "H");
            gameboard.placeShip(board, 1, 0, 3, "H");
            gameboard.placeShip(board, 2, 0, 3, "H");
            gameboard.placeShip(board, 3, 0, 4, "H");
            gameboard.placeShip(board, 4, 0, 5, "H");
            gameboard.receiveAttack(board, 0, 0);
            gameboard.receiveAttack(board, 0, 1);
            gameboard.receiveAttack(board, 1, 0);
            gameboard.receiveAttack(board, 1, 1);
            gameboard.receiveAttack(board, 1, 2);
            gameboard.receiveAttack(board, 2, 0);
            gameboard.receiveAttack(board, 2, 1);
            gameboard.receiveAttack(board, 2, 2);
            gameboard.receiveAttack(board, 3, 0);
            gameboard.receiveAttack(board, 3, 1);
            gameboard.receiveAttack(board, 3, 2);
            gameboard.receiveAttack(board, 3, 3);
            gameboard.receiveAttack(board, 4, 0);
            gameboard.receiveAttack(board, 4, 1);
            gameboard.receiveAttack(board, 4, 2);
            gameboard.receiveAttack(board, 4, 3);
            gameboard.receiveAttack(board, 4, 4);
            expect(gameboard.checkWinner()).toBeTruthy();
        });
        test("Check winner when one part attacked", () => {
            const gameboard = Gameboard();
            const board = gameboard.getBoard();

            gameboard.placeShip(board, 0, 0, 2, "H");
            gameboard.receiveAttack(board, 0, 0);
            expect(gameboard.checkWinner()).toBeFalsy();
        });
        test("check winner when not all ships are sunk", () => {
            const gameboard = Gameboard();
            const board = gameboard.getBoard();

            gameboard.placeShip(board, 0, 0, 2, "H");
            gameboard.placeShip(board, 1, 0, 3, "H");
            gameboard.placeShip(board, 2, 0, 3, "H");
            gameboard.placeShip(board, 3, 0, 4, "H");
            gameboard.placeShip(board, 4, 0, 5, "H");
            gameboard.receiveAttack(board, 0, 0);
            gameboard.receiveAttack(board, 0, 1);
            gameboard.receiveAttack(board, 1, 0);
            gameboard.receiveAttack(board, 1, 1);
            gameboard.receiveAttack(board, 1, 2);
            gameboard.receiveAttack(board, 2, 0);
            gameboard.receiveAttack(board, 2, 1);
            gameboard.receiveAttack(board, 2, 2);
            gameboard.receiveAttack(board, 3, 0);
            gameboard.receiveAttack(board, 3, 1);
            gameboard.receiveAttack(board, 3, 2);
            gameboard.receiveAttack(board, 3, 3);
            expect(gameboard.checkWinner()).toBeFalsy();
        });
    });
});
