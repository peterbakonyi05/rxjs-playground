const Rx = require('rxjs');

// Rx.Observable.from([1])
// 	.switchMap(() => Promise.resolve().then(() => undefined))
// 	.subscribe((data) => console.log("emit", data));

Rx.Observable.fromPromise(Promise.reject(1))
	.take(1)
	.catch(err => Rx.Observable.of(err))
	.subscribe(
		v => console.log("emit", v),
		err => console.log("err", err),
		() => console.log("complete"),
	)