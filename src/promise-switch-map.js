const Rx = require('rxjs');

Rx.Observable.of({})
	.switchMap(() => new Promise((resolve, reject) => {
		setTimeout(() => resolve(999), 3000);
	}))
	.subscribe(data => {
		console.log(data);
	});