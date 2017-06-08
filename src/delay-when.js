const Rx = require("rxjs");

Rx.Observable.of(1)
    .delayWhen(() => Rx.Observable
        // even if you use `interval` here, `delayWhen` will take one
        .interval(100)
        .do(time => console.log(`time: ${time}`)
    ))
    .subscribe(data => console.log(`data: ${data}`));

