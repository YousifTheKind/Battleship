import { Game } from "./GameController.js";
const realPlayerBoardElement = document.querySelector(".real-player-board");
const botPlayerBoardElement = document.querySelector(".bot-player-board");
const instructionElement = document.querySelector(".instructions-message");
const mainElement = document.querySelector(".main");
const resetButton = document.querySelector(".reset-button");
const form = document.querySelector(".ships-form form");
const realPlayerGameboard = Game().getRealPlayerGameboard();
const realPlayerBoard = realPlayerGameboard.getBoard();
const botPlayerGameboard = Game().getBotPlayerGameboard();
const botPlayerBoard = botPlayerGameboard.getBoard();

function updateInstructions(message) {
    instructionElement.textContent = message;
}
function render(board, player) {
    board.forEach((square, index) => {
        const sq = document.createElement("button");
        sq.dataset.row = square.y;
        sq.dataset.column = square.x;
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
        if (square.hit || square.miss) {
            sq.classList.add("disabled-square");
            if (square.hit) {
                sq.classList.add("ship-hit");

                if (square.ship.IsSunk()) {
                    sq.classList.add("sunk-ship");
                }
            }
            if (square.miss) {
                sq.classList.add("ship-miss");
            }
        }
        if (player == "real") {
            sq.classList.add("real-player-square");
            if (square.ship) {
                sq.classList.add("ships");
            }
            realPlayerBoardElement.appendChild(sq);
        } else {
            sq.classList.add("bot-player-square");
            botPlayerBoardElement.appendChild(sq);
        }
    });
}
function renderRealPlayerBoard() {
    realPlayerBoardElement.replaceChildren();
    render(realPlayerBoard, "real");
}
function renderBotPlayerBoard() {
    botPlayerBoardElement.replaceChildren();
    render(botPlayerBoard, "bot");
}
function handleGameOver(winner) {
    updateInstructions(`${winner} Won!`);
    mainElement.classList.add("disabled-square");
}
function botAttackDOM() {
    updateInstructions("Computer turn to attack");
    mainElement.classList.add("disabled-square");
    setTimeout(() => {
        Game().botAttack(realPlayerBoard);
        renderRealPlayerBoard(realPlayerBoard);
        if (realPlayerGameboard.checkWinner()) {
            handleGameOver("Your Opponent");
        } else {
            mainElement.classList.remove("disabled-square");
            updateInstructions("Your turn to attack");
        }
    }, 500);
}
botPlayerBoardElement.addEventListener("click", (e) => {
    const y = e.target.dataset.row;
    const x = e.target.dataset.column;
    if (!x || !y) return;
    else {
        botPlayerGameboard.receiveAttack(botPlayerBoard, x, y);
        if (botPlayerGameboard.checkWinner()) {
            handleGameOver("You");
        } else {
            renderBotPlayerBoard(botPlayerBoard);
            botAttackDOM();
        }
    }
});

resetButton.addEventListener("click", () => {
    document.location.reload();
});
function startGame() {
    botPlayerBoardElement.classList.remove("disabled-square");
    realPlayerBoardElement.classList.remove("disabled-square");
    form.classList.add("disabled-square");
    updateInstructions("GAME STARTED!");

    setTimeout(() => {
        updateInstructions("Click on the board to attack");
    }, 2000);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reportValidity();
    const y = document.getElementById("row").value;
    const x = document.getElementById("column").value;
    const orientation = document.getElementById("orientation").value;
    const length = document.getElementById("length");
    const status = realPlayerGameboard.placeShip(
        realPlayerBoard,
        x,
        y,
        length.value,
        orientation
    );
    if (status.errorMsg) {
        updateInstructions(status.errorMsg);
    } else {
        length.remove(length.selectedIndex);

        form.reset();
        renderRealPlayerBoard();
        if (realPlayerGameboard.getNumberOfShips() == 5) {
            startGame();
        }
    }
});

renderBotPlayerBoard();
renderRealPlayerBoard();
