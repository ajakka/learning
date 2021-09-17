import { actions } from "./actions.js";

let ID_COUNTER = 0;

export const reducer = (state = [], action) => {
	switch (action.type) {
		case actions.BUG_CREATED:
			return bugCreated(state, action.data);

		case actions.BUG_CHANGED:
			return bugChanged(state, action.data);

		case actions.BUG_REMOVED:
			return bugRemoved(state, action.data);

		default:
			return state;
	};
}

const bugCreated = (state, data) => {
	return [
		...state,
		{
			id: ++ID_COUNTER,
			description: data.description,
			isResolved: false,
		}
	];
}

const bugChanged = (state, data) => {
	return state.map(bug => {
		return (bug.id === data.id)
			? {
				id: data.id,
				description: data.description ? data.description : bug.description,
				isResolved: data.isResolved ? data.isResolved : bug.isResolved,
			}
			: bug
	});
}

const bugRemoved = (state, data) => {
	return state.filter(s => s.id !== data.id);
}