import { newGame } from "./GameController.js";
const realPlayerBoardElm = document.querySelector(".real-player-board");
const realPlayerBoard = newGame().realPlayerBoard;
function renderRealPlayerBoard(board) {
    realPlayerBoardElm.textContent = "something";
}
function renderBotPlayerBoard(board) {}

realPlayerBoardElm.addEventListener("click", () => {
    renderRealPlayerBoard(newGame);
});
export { renderBotPlayerBoard, renderRealPlayerBoard };
