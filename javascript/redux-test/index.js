import { store } from "./store.js";
import { changeBug, createBug } from "./actions.js";

const unsub = store.subscribe(() => {
	console.log(store.getState());
})

store.dispatch(createBug("Bug in adding new user"));
store.dispatch(changeBug(1, { isResolved: true }));