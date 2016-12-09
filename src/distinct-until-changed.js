/**
 * By default distinctUntilChanged uses the === operator
 */
const _ = require('lodash');
const Rx = require('rxjs');

 Rx.Observable.interval(500)
	.take(5)
	.map((i) => {
		return {
			a: i > 3
		};
	})
	// withouth _.isEqual it will let each item through because the references are different
	.distinctUntilChanged(_.isEqual)
	.subscribe((data) => {
		console.log(data);
	});
