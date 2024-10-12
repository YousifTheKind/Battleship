import { Player } from "./Player.js";
const realPlayerBoardElm = document.querySelector(".real-player-board");
const botPlayerBoardElm = document.querySelector(".bot-player-board");
const realPtlayerBoard = newGame().realPlayerBoard;
const botPlayerBoard = newGame().botPlayerBoard;
const botPlayerGameboard = newGame().botPlayerGameboard;

function newGame() {
    const realPlayer = Player();
    const realPlayerGameboard = realPlayer.Gameboard;
    const realPlayerBoard = realPlayerGameboard.getBoard();
    realPlayerGameboard.placeShip(realPlayerBoard, 0, 0, 2, "H");
    console.log(
        realPlayerGameboard.placeShip(realPlayerBoard, 0, 2, 3, "H").errorMsg
    );
    console.log(
        realPlayerGameboard.placeShip(realPlayerBoard, 0, 4, 3, "H").errorMsg
    );
    realPlayerGameboard.placeShip(realPlayerBoard, 0, 6, 4, "H");
    realPlayerGameboard.placeShip(realPlayerBoard, 0, 8, 5, "H");
    const botPlayer = Player();
    const botPlayerGameboard = botPlayer.Gameboard;
    const botPlayerBoard = botPlayerGameboard.getBoard();
    botPlayerGameboard.placeShip(botPlayerBoard, 1, 2, 2, "V");
    botPlayerGameboard.placeShip(botPlayerBoard, 3, 2, 3, "V");
    botPlayerGameboard.placeShip(botPlayerBoard, 5, 2, 3, "V");
    botPlayerGameboard.placeShip(botPlayerBoard, 7, 2, 4, "V");
    botPlayerGameboard.placeShip(botPlayerBoard, 9, 2, 5, "V");

    return { botPlayerBoard, realPlayerBoard, botPlayerGameboard };
}
function renderRealPlayerBoard(board) {
    realPlayerBoardElm.replaceChildren();
    board.forEach((square, index) => {
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
        realPlayerBoardElm.appendChild(sq);
    });
}
function renderBotPlayerBoard(board) {
    botPlayerBoardElm.replaceChildren();
    board.forEach((square, index) => {
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
        botPlayerBoardElm.appendChild(sq);
    });
}

botPlayerBoardElm.addEventListener("click", (e) => {
    const y = e.target.dataset.row;
    const x = e.target.dataset.column;
    if (x && y) {
        console.log(x, y);

        console.log(botPlayerGameboard.receiveAttack(botPlayerBoard, x, y));
        renderBotPlayerBoard(botPlayerBoard);
    }
});

export { renderBotPlayerBoard, renderRealPlayerBoard, newGame };
