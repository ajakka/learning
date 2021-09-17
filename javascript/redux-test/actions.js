export const actions = {
	BUG_CREATED: "bug_created",
	BUG_CHANGED: "bug_changed",
	BUG_REMOVED: "bug_removed",
}

export const createBug = (bugDescription) => {
	return {
		type: actions.BUG_CREATED,
		data: {
			description: bugDescription,
		}
	};
}

export const changeBug = (changedId, data) => {
	return {
		type: actions.BUG_CHANGED,
		data: {
			id: changedId,
			description: data.description,
			isResolved: data.isResolved
		}
	};
}

export const removeBug = (removedId) => {
	return {
		type: actions.BUG_REMOVED,
		data: { id: removedId }
	};
}
