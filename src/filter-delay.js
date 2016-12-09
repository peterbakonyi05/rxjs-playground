/**
 * todo: clean up :)
 */
const Rx = require('rxjs');

const currentState = Rx.Observable.of({
	shouldDelay: true
})
	.delay(1000);


const anotherObservable = Observable.of({shouldFilter: false});

const effect = Rx.Observable.timer(500)
	.switchMap(() => {
		console.log("getCurrentState");
		return currentState
			.delayWhen((state) => {
				if (state.shouldDelay) {
					return Rx.Observable.timer(3000);
				} else {
					return Rx.Observable.timer(0);
				}
			})
			.filter((state) => !state.shouldFilter)
			.map((state) => {
				console.log(state);
				return { asdasd: "HELLO" };
			});
	});

// effect.subscribe(
// 	(data) => {
// 		console.log("data", data);
// 	},
// 	(err) => {
// 		console.log("error", err)
// 	},
// 	() => {
// 		console.log("done");
// 	});


Rx.Observable
	.timer(5000)
  .do(() => {
	  console.log("This will trigger after delay.");
  })
  .subscribe((data) => {
	  console.log(data);
  });

