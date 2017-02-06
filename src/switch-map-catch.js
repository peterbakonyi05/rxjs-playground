/**
 * Catch must always return an Observable, doesn't matter
 * if it is inside the `switchMap` or not.
 * 
 * Both will log `3`
 */
const Rx = require('rxjs');

Rx.Observable.of(1)
	.switchMap(() => Rx.Observable.of(2)
		.map(() => {
			throw new Error("asd");
		})
	)
	.catch(() => Rx.Observable.of(3))
	.subscribe(data => {
		console.log(data);
	});

Rx.Observable.of(1)
	.switchMap(() => Rx.Observable.of(2)
		.map(() => {
			throw new Error("asd");
		})
		.catch(() => Rx.Observable.of(3))
	)
	.subscribe(data => {
		console.log(data);
	});