const Rx = require('rxjs');

Rx.Observable.from([1])
	.switchMap(() => Promise.resolve().then(() => undefined))
	.subscribe((data) => console.log("emit", data));