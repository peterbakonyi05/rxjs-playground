/**
 * todo: cleanup and document
 */
const Rx = require('rxjs');


// Rx.Observable.interval(500)
// 	.withLatestFrom(Rx.Observable.interval(900))
// 	.subscribe(data => {
// 		console.log(data);
// 	})


// todo: make one where the issue is demonstrated
Rx.Observable.interval(500)
	.mergeMap(outerData => Rx.Observable.interval(900)
		.first()
		.map(innerData => [outerData, innerData])
	)
	.subscribe(data => {
		console.log(data);
	});
