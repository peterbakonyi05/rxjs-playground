/**
 * .unsubscribe() wont trigger `complete`
 */
const Rx = require("rxjs");

const a$ = Rx.Observable.interval(100);

const a$$ = a$.subscribe(
	(data) => console.log("emit", data),
	null,
	() => console.log("complete: you won't see this")
);


setTimeout(() => a$$.unsubscribe(), 1000); // this won't trigger complete
// setTimeout(() => a$$.complete(), 1000); // this would but it is not typed, TS compiler will complain