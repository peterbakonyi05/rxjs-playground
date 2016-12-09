const _ = require('lodash');
const Rx = require('rxjs');

const batchBufferIn$ = new Rx.Subject();

const batchBufferOut$ = batchBufferIn$
	.asObservable()
	.do((request) => {
		console.log(request);
	})
	.share()
	.subscribe();


batchBufferIn$.subscribe((data) => {
	console.log(data);
});


batchBufferIn$.next("500");
batchBufferIn$.next("501");
batchBufferIn$.next("502");
batchBufferIn$.next("503");