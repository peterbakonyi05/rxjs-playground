const Rx = require('rxjs');

const observable = Rx.Observable.timer(0, 100)
	.bufferTime(1000)
	.share(); // withoud share the second will start from the beginning (cold)

observable.subscribe((data) => console.log(`FIRST: ${data}`));

setTimeout(() => {
	observable.subscribe((data) => console.log(`SECOND: ${data}`));
}, 3000);