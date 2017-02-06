const Rx = require("rxjs");

var store = dispatcher.asObservable();

let subscriptions = new WeakMap();
let currentStates = new WeakMap();

store.getSync = function getSync(selector) {
	if (!subscriptions.get(this)) {
		subscriptions.set(this, this.subscribe(data => {
			currentStates.set(this, data);
		}));
	}

	const state = currentStates.get(this);
	return selector
		? selector(state)
		: state;
};
