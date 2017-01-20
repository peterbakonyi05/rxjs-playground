/**
 * CombineLatest
 */
const Rx = require("rxjs");

// OUTPUT:
// [3, 1]
Rx.Observable.combineLatest(
	Rx.Observable.from([1, 2, 3]),
	Rx.Observable.of(1)
)
	.subscribe(data => console.log(data));


console.log("reversed order");
// OUTPUT:
// [1, 1]
// [2, 1]
// [3, 1]
Rx.Observable.combineLatest(
	Rx.Observable.of(1),
	Rx.Observable.from([1, 2, 3])
)
	.subscribe(data => console.log(data));