/**
 * OUTPUT: "FIRST", "INITIAL", "SECOND"
 * 
 * This might be surprising, because this is the order of the next calls: "INITIAL", "FIRST", "SECOND"
 *
 * Why is it happening?
 * Subjects don't protect against reentrancy because to do so would necessitate unbounded buffers
 *
 * @see: https://github.com/ReactiveX/rxjs/issues/2155
 */

const Rx = require('rxjs');

const observable = new Rx.BehaviorSubject();

observable.next("INITIAL");

observable
	.do(data => {
		if (data === "INITIAL") {
			observable.next("FIRST");
		}
	})
	.subscribe(state => console.log(state));

observable.next("SECOND");
