export default function Ship(length) {
    if (2 > length > 5) {
        throw new Error("Ship length should be between 2 & 5");
    }

    let timesHit = 0;
    const hit = () => {
        timesHit++;
    };

    const IsSunk = () => {
        return length === timesHit ? true : false;
    };
    const getTimesHit = () => timesHit;
    return {
        getTimesHit,
        hit,
        IsSunk,
    };
}
