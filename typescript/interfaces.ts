/**
 * Intefaces
 * The intefaces are the same as Inline but more general and allow for
 * code reuse
 * You can also add function signature that need to be implemented later
 */
interface IPoint {
    x: number,
    y: number,
    draw: () => void // just for demonstration
}
function drawPointWithIntefaces(point: IPoint) {
    //...
}
drawPointWithIntefaces({ x: 1, y: 2, draw: ()=>{}})