const { Subject, interval } = require('rxjs');
const { tap, withLatestFrom } = require('rxjs/operators');


// Rx.Observable.interval(500)
// 	.withLatestFrom(Rx.Observable.interval(900))
// 	.subscribe(data => {
// 		console.log(data);
// 	})

const subject = new Subject();
const obs = subject.asObservable().pipe(tap(d => console.log(d)));

// todo: make one where the issue is demonstrated
interval(2000)
	.pipe(
		withLatestFrom(obs)
	)
	.subscribe(data => {
		console.log(data);
	});

let i = 0;
setInterval(() => subject.next(i++), 200);