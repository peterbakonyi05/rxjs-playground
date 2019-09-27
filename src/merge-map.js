/**
 * You can flatten an array of Observables using mergeMap/switchMap
 * by just directly returning the values.
 * 
 * 
 * -"a"-"b"-"c"
 */
const { from, of } = require('rxjs');
const { mergeMap } = require('rxjs/operators');

from([1])
	.pipe(
		mergeMap(() => from([1, of(2)]))
	)
	.subscribe(
		d => console.log(d)
	);
