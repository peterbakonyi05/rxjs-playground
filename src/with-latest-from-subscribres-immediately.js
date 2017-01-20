const Rx = require('rxjs');

const store$ = Rx.Observable.of(1);

const actions$ = new Rx.Subject();

actions$
	.withLatestFrom(store$.map(data => {
		console.log(data);
		return data;
	}))
	.subscribe(data => {
		console.log(data);
	});

// without actions$.next it will still subscribe and run the callback in store.map$
// makes sense, because the Observable might emit once in the beginning and never again
// and `withLatestFrom` should get that value too

setTimeout(() => {
	actions$.next({a: 123});
}, 2000)