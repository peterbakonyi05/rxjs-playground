/**
 * It will just complete, won't emit even once.
 */
const Rx = require('rxjs');

Rx.Observable.empty()
	.subscribe(
		data => {
			console.log(data);
		},
		err => console.log("err", err),
		() => console.log("complete")
	);

