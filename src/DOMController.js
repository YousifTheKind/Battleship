import { newGame } from "./GameController.js";
const realPlayerBoardElm = document.querySelector(".real-player-board");
const botPlayerBoardElm = document.querySelector(".bot-player-board");
const realPlayerBoard = newGame().realPlayerBoard;
const botPlayerBoard = newGame().botPlayerBoard;

function renderRealPlayerBoard(board) {
    realPlayerBoardElm.replaceChildren();
    board.forEach((square, index) => {
        const sq = document.createElement("button");
        sq.dataset.row = square.x;
        sq.dataset.column = square.y;
        sq.className = "real-player-square";
        realPlayerBoardElm.appendChild(sq);
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
    });
}
function renderBotPlayerBoard(board) {
    botPlayerBoardElm.replaceChildren();
    board.forEach((square, index) => {
        const sq = document.createElement("button");
        sq.dataset.row = square.x;
        sq.dataset.column = square.y;
        sq.className = "bot-player-square";
        botPlayerBoardElm.appendChild(sq);
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
            colIndex.classList.add("index");
            colIndex.classList.add("column");
            sq.appendChild(colIndex);
        }
    });
}

export { renderBotPlayerBoard, renderRealPlayerBoard };
