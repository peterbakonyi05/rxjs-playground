const _ = require('lodash');
const Rx = require('rxjs');

let i = 0;

// completes the previous inner, can be tricky
Rx.Observable.timer(0, 500)
	.do((i) => console.log(i))
	.switchMap(() => Rx.Observable.of(++i))
	.take(2)
	.subscribe(
		(i) => console.log("emit ", i),
		null,
		() => console.log("complete")
	);