import { createStore } from "redux";
import { reducer } from "./reducer.js";

export const store = createStore(reducer);

/**
 * store = [
 * 	{
 * 		id: 1,
 * 		description: "Bug in payment",
 * 		isResolved: true
 * 	},
 * 	{},
 * 	...
 * ]
 */