/**
 * If there is an error inside `do` (that is used for doing a side-effect),
 * it will still trigger an exception that can be caught using the `catch` operator.
 */
const Rx = require('rxjs');

Rx.Observable.of("value")
	.do(() => {
		throw new Error("Error")
	})
	.catch((e) => Rx.Observable.of("caught value"))
	.subscribe(
		data => console.log(`DATA: ${data}`),
		err => console.log(`ERROR: ${err}`),
		() => console.log(`COMPLETE`)
	);

// OUTPUT:
// DATA: caught value
// COMPLETE