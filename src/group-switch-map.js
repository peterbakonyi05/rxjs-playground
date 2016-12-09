/**
 * todo: clean up :)
 */
const _ = require("lodash");
const Rx = require('rxjs');



Rx.Observable.prototype.groupSwitchMap = function (project, groupBy) {
	return this.groupBy(groupBy || _.identity)
		.mergeMap(grouppedObservable => grouppedObservable.switchMap(project));
}


// completes the previous inner, can be tricky
// Rx.Observable.timer(0, 200)
// 	.take(10)
// 	.map(data => ({ data: data % 3 }))
// 	.groupSwitchMap((data) => Rx.Observable.of("inner: " + JSON.stringify(data)).delay(1000))
// 	.subscribe((data) => {
// 		console.log(data);
// 	});

let a = 0;

Rx.Observable.from([1, 1, 2, 2, 3, 3])
	.groupSwitchMap(
		i => {
			return Rx.Observable.of(i).delay(1)
		},
		i => {
			a++;
			const g = a % 2 ? i : i.toString();
			console.log(typeof g);
			return g;
		}
	)
	.subscribe(i => {
		console.log(i);
	});