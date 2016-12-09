/**
 * todo: cleanup and document
 */
const _ = require('lodash');
const Rx = require('rxjs');

let i = 0;

// completes the previous inner, can be tricky
Rx.Observable.timer(0, 2000)
	.take(3)
	.switchMap(() => {
		return Rx.Observable.of(++i)
			.delay(1000);
	}, function() {
		console.log(arguments);
	})
	.subscribe(data => {
		console.log(data);
	});