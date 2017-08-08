const Rx = require("rxjs");

Rx.Observable.of(1)
    .delayWhen(() => Rx.Observable.of(null).delay(1000))
    .subscribe(data => console.log(data));

setTimeout(() => console.log("a"));