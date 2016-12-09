/**
 * You can flatten an array of Observables using mergeMap/switchMap
 * by just directly returning the values.
 * 
 * 
 * -"a"-"b"-"c"
 */
const Rx = require('rxjs');

Rx.Observable.from([["a", "b", "c"], ["d", "e", "f"]]) // -[a, b, c]-[d, e, f]-
	.switchMap(items => items) // -a-b-c-d-e-f-
	.subscribe(
		d => console.log(d)
	);