import { Game } from "./GameController.js";
const realPlayerBoardElement = document.querySelector(".real-player-board");
const botPlayerBoardElement = document.querySelector(".bot-player-board");
const instructionElement = document.querySelector(".instructions-message");
const mainElement = document.querySelector(".main");
const resetButton = document.querySelector(".reset-button");
const realPlayerGameboard = Game().getRealPlayerGameboard();
let realPlayerBoard = realPlayerGameboard.getBoard();
const botPlayerGameboard = Game().getRealPlayerGameboard();
let botPlayerBoard = botPlayerGameboard.getBoard();

function updateInstructions(message) {
    instructionElement.textContent = message;
}
function renderRealPlayerBoard() {
    realPlayerBoardElement.replaceChildren();
    console.log(realPlayerBoard);

    realPlayerBoard.forEach((square, index) => {
        const sq = document.createElement("button");
        sq.dataset.row = square.y;
        sq.dataset.column = square.x;
        sq.className = "real-player-square";
        if (index % 10 == 0) {
            const rowIndex = document.createElement("div");
            rowIndex.textContent = index.toString()[0];
            rowIndex.classList.add("row");
            rowIndex.classList.add("index");
            sq.appendChild(rowIndex);
        }
        if (index < 10) {
            const colIndex = document.createElement("div");
            colIndex.textContent = index.toString()[0];
            colIndex.classList.add("column");
            colIndex.classList.add("index");
            sq.appendChild(colIndex);
        }
        if (square.ship) {
            sq.classList.add("ships");
        }
        if (square.hit) {
            sq.id = "ship-hit";
        }
        if (square.miss) {
            sq.id = "ship-miss";
        }
        if (square.hit || square.miss) {
            sq.className = "disabled-square";
        }

        realPlayerBoardElement.appendChild(sq);
    });
}
function renderBotPlayerBoard() {
    botPlayerBoardElement.replaceChildren();
    botPlayerBoard.forEach((square, index) => {
        const sq = document.createElement("button");
        sq.dataset.row = square.y;
        sq.dataset.column = square.x;
        sq.classList.add("bot-player-square");
        if (index % 10 == 0) {
            const rowIndex = document.createElement("div");
            rowIndex.textContent = index.toString()[0];

            rowIndex.classList.add("index", "row");
            sq.appendChild(rowIndex);
        }
        if (index < 10) {
            const colIndex = document.createElement("div");
            colIndex.textContent = index.toString()[0];
            colIndex.classList.add("index", "column");
            sq.appendChild(colIndex);
        }
        if (square.ship) {
            sq.classList.add("ships");
        }
        if (square.hit) {
            sq.id = "ship-hit";
        }
        if (square.miss) {
            sq.id = "ship-miss";
        }
        if (square.hit || square.miss) {
            sq.className = "disabled-square";
        }
        botPlayerBoardElement.appendChild(sq);
    });
}
function handleGameOver(winner) {
    updateInstructions("Game Over!");
    mainElement.replaceChildren();
    const winMsg = document.createElement("div");
    winMsg.textContent = `Game Over\n ${winner} Won! \n click reset to play again`;
}
function botAttackDOM() {
    updateInstructions("Computer turn to attack");
    mainElement.classList.add("disabled-square");
    setTimeout(() => {
        Game().botAttack(realPlayerBoard);
        if (realPlayerGameboard.checkWinner()) {
            handleGameOver("Your Opponent");
        } else {
            mainElement.classList.remove("disabled-square");
            renderRealPlayerBoard(realPlayerBoard);
            updateInstructions("Your turn to attack");
        }
    }, 1000);
}
botPlayerBoardElement.addEventListener("click", (e) => {
    const y = e.target.dataset.row;
    const x = e.target.dataset.column;
    if (x && y) {
        botPlayerGameboard.receiveAttack(botPlayerBoard, x, y);
        if (botPlayerGameboard.checkWinner()) {
            handleGameOver("You");
        }
        renderBotPlayerBoard(botPlayerBoard);
        botAttackDOM();
    }
});

resetButton.addEventListener("click", () => {
    realPlayerBoard = realPlayerGameboard.getNewBoard();
    botPlayerBoard = botPlayerGameboard.getNewBoard();
    renderBotPlayerBoard();
    renderRealPlayerBoard();
});
renderBotPlayerBoard();
renderRealPlayerBoard();
