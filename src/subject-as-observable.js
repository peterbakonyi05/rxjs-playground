const Rx = require("rxjs");

const subject = new Rx.Subject();

subject
	.asObservable()
	.subscribe(
	() => console.log("emit"),
	() => console.log("error"),
	() => console.log("complete")
	);

subject.next(1);
setTimeout(() => subject.next(2), 100);
setTimeout(() => subject.next(2), 1000);
setTimeout(() => subject.complete(), 3000); // this will complete the subscriber as expected