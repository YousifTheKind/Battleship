import "./styles.css";
import "./DOMController.js";
import "./GameController.js";
import {
    renderRealPlayerBoard,
    renderBotPlayerBoard,
} from "./DOMController.js";
import { newGame } from "./GameController.js";

renderRealPlayerBoard(newGame().realPlayerBoard);
renderBotPlayerBoard(newGame().botPlayerBoard);
