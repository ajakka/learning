/**
 * TypeScript can run JavaScript code
 * To turn ts into js, the command is tsc main.ts
 */
const message = 'Here we are';
console.log(message);

/**
 * Import from other module
 */
import { LikesCount } from './module'
let dum = new LikesCount(55);
dum.onClick();
console.log(dum.likesCount);