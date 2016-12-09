/**
 * todo: cleanup and document
 */
const _ = require('lodash');
const Rx = require('rxjs');

let i = 0;

const a$ = Rx.Observable.timer(0, 2000)
	.take(1);


a$.subscribe(
	d => console.log("outer", d),
	null,
	() => console.log("outer complete")
);

// completes the previous inner, can be tricky
a$
	.switchMap(() => {
		return Rx.Observable.interval(500)
			.take(10)
			.mapTo("something");
	})
	.subscribe(data => {
		console.log(data);
	}, null, () => console.log("inner complete"));