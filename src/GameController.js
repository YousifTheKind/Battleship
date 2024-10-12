import { Player } from "./Player.js";
export function Game() {
    const botAttacks = [];
    const realPlayer = Player();
    const botPlayer = Player();

    function botAttack(board) {
        const getRandomPoint = () => {
            const x = Math.floor(Math.random() * 9);
            const y = Math.floor(Math.random() * 9);
            return [x, y];
        };
        let randomPoint = getRandomPoint();

        while (botAttacks.includes(randomPoint)) {
            randomPoint = getRandomPoint();
        }
        console.log(realPlayer.Gameboard.getBoard());

        realPlayer.Gameboard.receiveAttack(
            board,
            randomPoint[0],
            randomPoint[1]
        );
        botAttacks.push(randomPoint);
    }

    const getRealPlayerGameboard = () => realPlayer.Gameboard;
    const getBotPlayerGameboard = () => botPlayer.Gameboard;
    return {
        botAttack,
        getRealPlayerGameboard,
        getBotPlayerGameboard,
    };
}
