import "./styles.css";
import "./DOMController.js";
import {
    renderRealPlayerBoard,
    renderBotPlayerBoard,
} from "./DOMController.js";
import { newGame } from "./DOMController.js";

renderRealPlayerBoard(newGame().realPlayerBoard);
renderBotPlayerBoard(newGame().botPlayerBoard);
