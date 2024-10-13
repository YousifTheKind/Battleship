import { Player } from "./Player.js";
export function Game() {
    const botAttacks = [];
    const realPlayer = Player();
    const botPlayer = Player();
    function placeBotShips() {
        const getRandomPoint = () => {
            const x = Math.floor(Math.random() * 9);
            const y = Math.floor(Math.random() * 9);
            return [x, y];
        };
        let randomPoint = getRandomPoint();
        const lengths = [2, 3, 3, 4, 5];
        const orientation = ["H", "V"];
        for (let i = 0; i < lengths.length; i++) {
            while (
                botPlayer.Gameboard.placeShip(
                    botPlayer.Gameboard.getBoard(),
                    randomPoint[0],
                    randomPoint[1],
                    lengths[i],
                    orientation[Math.round(Math.random())]
                ).errorMsg
            ) {
                randomPoint = getRandomPoint();
            }
        }
    }
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

        realPlayer.Gameboard.receiveAttack(
            board,
            randomPoint[0],
            randomPoint[1]
        );
        botAttacks.push(randomPoint);
    }

    const getRealPlayerGameboard = () => realPlayer.Gameboard;
    const getBotPlayerGameboard = () => botPlayer.Gameboard;
    placeBotShips();
    return {
        botAttack,
        getRealPlayerGameboard,
        getBotPlayerGameboard,
    };
}
