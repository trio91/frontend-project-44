import { start, getNumber } from "../index.js";

function isPrime (number) {
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) return false
    }
    return number !== 1;
}







const game = () => {

}
export default game;