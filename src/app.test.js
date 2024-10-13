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
        expect(ship.getTimesHit()).toBe(2);
    });
});

describe("Gameboard", () => {
    let gameboard;
    let board;
    let indexOfSquare;
    let x;
    let y;
    beforeEach(() => {
        gameboard = Gameboard();
        board = gameboard.getBoard();
        x = 2;
        y = 2;
        indexOfSquare = board.findIndex(
            (square) => square.x === x && square.y === y
        );
    });

    describe("placeShip", () => {
        test("Place a ship horizontally", () => {
            gameboard.placeShip(board, x, y, 2, "H");

            expect(board[indexOfSquare].ship).toBeTruthy();
            expect(board[indexOfSquare + 1].ship).toBeTruthy();
        });
        test("Place a ship vertically", () => {
            gameboard.placeShip(board, x, y, 2, "V");

            expect(board[indexOfSquare].ship).toBeTruthy();
            expect(board[indexOfSquare + 10].ship).toBeTruthy();
        });

        test("Placing a ship where there is already a ship", () => {
            gameboard.placeShip(board, x, y, 5, "H");
            expect(
                gameboard.placeShip(board, x, y, 2, "H").changed
            ).toBeFalsy();
            expect(
                gameboard.placeShip(board, x, y, 2, "H").errorMsg
            ).toBeTruthy();
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
                gameboard.placeShip(board, 2, 8, 3, "V").errorMsg
            ).toBeTruthy();
        });
    });
    describe("receiveAttack", () => {
        test("Attacking a square off the board", () => {
            expect(gameboard.receiveAttack(board, 55, 2).errorMsg).toBeTruthy();
        });
        test("Attacking a ship", () => {
            gameboard.placeShip(board, x, y, 3, "H");
            expect(board[indexOfSquare].ship.getTimesHit()).toEqual(0);
            const attackObject = gameboard.receiveAttack(board, x, y);
            expect(attackObject.errorMsg).toBeFalsy();
            expect(board[indexOfSquare].ship.getTimesHit()).toEqual(1);
            expect(board[indexOfSquare].hit).toBeTruthy();
            expect(board[indexOfSquare].miss).toBeFalsy();
        });
        test("Attacking a square with no ship", () => {
            const attackObject = gameboard.receiveAttack(board, x, y);
            expect(board[indexOfSquare].miss).toBeTruthy();
            expect(board[indexOfSquare].hit).toBeFalsy();
            expect(attackObject.errorMsg).toBeFalsy();
        });
        test("Attacking a square that's been attacked before", () => {
            gameboard.receiveAttack(board, x, y);
            expect(gameboard.receiveAttack(board, 2, 2).errorMsg).toBeTruthy();
        });

        test("Attack a square until ship is sunk", () => {
            gameboard.placeShip(board, x, y, 3, "V");
            gameboard.receiveAttack(board, x, y);
            gameboard.receiveAttack(board, x, y + 1);
            gameboard.receiveAttack(board, x, y + 2);
            expect(board[indexOfSquare].ship.IsSunk()).toBeTruthy();
        });
    });
    describe("check winner", () => {
        test("Check winner when all ships are sunk", () => {
            gameboard.placeShip(board, 0, 0, 2, "H");
            gameboard.receiveAttack(board, 0, 0);
            gameboard.receiveAttack(board, 1, 0);
            expect(gameboard.checkWinner()).toBeTruthy();
        });
        test("check winner when not all ships are sunk", () => {
            gameboard.placeShip(board, 0, 0, 2, "H");
            gameboard.placeShip(board, 0, 1, 2, "H");
            gameboard.receiveAttack(board, 0, 0);
            gameboard.receiveAttack(board, 1, 0);
            expect(gameboard.checkWinner()).toBeFalsy();
        });
    });
});
