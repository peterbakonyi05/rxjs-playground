/**
 * By default distinctUntilChanged uses the === operator.
 * A second parameter can be the key selector.
 */
const _ = require('lodash');
const Rx = require('rxjs');
const items = [1, 2, 3];

 Rx.Observable.interval(500)
	.take(5)
	.map((i) => {
		return {
			anotherValue: i,
			items
		};
	})
	.distinctUntilChanged(null, a => a.items)
	.subscribe((data) => {
		console.log(data);
	});
