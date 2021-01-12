"use strict";
exports.__esModule = true;
/**
 * TypeScript can run JavaScript code
 * To turn ts into js, the command is tsc main.ts
 */
var message = 'Here we are';
console.log(message);
/**
 * Import from other module
 */
var module_1 = require("./module");
var dum = new module_1.LikesCount(55);
dum.onClick();
console.log(dum.likesCount);
