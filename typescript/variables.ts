/**
 * var vs let
 * The var keywork means the variable is scooped to the nearest function.
 * The let keywork means the variable is scooped to the nearest block.
 * If you change 'var i' to 'let i', the program wouldn't work
 */
function someWork() {
    console.log('Loop')
    for (var i = 0; i < 2; i++) {
        console.log(i)
    }
    console.log(`End loop with i=${i}`);
}
someWork();



/**
 * Declaring variable types in ts
 */
let a: number;
let b: string;
let c: boolean;
let d: number[];
console.log(`Empty variables a=${a}, b=${b}, c=${c}, d=${d}`);



/**
 * Dynamically declaring variable types in ts 
 */
let e = [1, 2, 3];
console.log(`Array e=${e}`)



/**
 * Enums
 */
enum Colors {
    black = 0x000,
    white = 0xFFF,
    red = 0xF00,
    green = 0x0F0,
    blue = 0x00F
};
let bgColor = Colors.red;
console.log(`Enum Colors=${Colors}, Variable bgColor=${bgColor}`)



/**
 * Type assertion
 * (<string>word) and (word as string)
 */
let word;
word = 'salam';
console.log(`CharAt(0)=${(<string>word).charAt(0)}`);
console.log(`CharAt(1)=${(word as string).charAt(1)}`);



/**
 * Arrow function (lambdas)
 */
let logTr = function (mes) {
    console.log(mes);
}

let logAr = (mes) => console.log(mes);

logTr('Log from a traditional function');
logAr('Log from an arrow function');



/**
 * Inline Annotation
 * The variable point was annotated with the custom class { x: number, y: number }
 * to enforce type safety.
 */
function drawPointWithInline(point: { x: number, y: number }) {
    let x: number = point.x;
    let y: number = point.y;
}
drawPointWithInline({ x: 1, y: 2 });