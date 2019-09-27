/**
 * It will just complete, won't emit even once.
 */
const { of } = require("rxjs/observable/of");
const { empty } = require("rxjs/observable/empty");
const { catchError, map, switchMap } = require("rxjs/operators");

of(true)
	.pipe(
		switchMap(() => of(1)
			.pipe(
				map(() => {
					throw new Error("asd");
				}),
				catchError(() => empty())
			)
		)
	)
	.subscribe(
		d => console.log("data", d),
		d => console.log("error", e),
		() => console.log("complete")
	);

