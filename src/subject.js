const Rx = require('rxjs');

const subject$ = new Rx.Subject();

Rx.Observable.from([0, 200])
	.takeUntil(subject$.asObservable())
	.subscribe(
		v => console.log("a emit", v),
		null,
		() => console.log("a complete")
	);

subject$.next(1);

const b$ = subject$.asObservable()
	.take(1)
	.subscribe(
		v => console.log("b emit", v),
		null,
		() => console.log("b complete")
	);


setTimeout(() => subject$.next(2), 2000);