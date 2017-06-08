const Rx = require('rxjs');

Rx.Observable.race(
    Rx.Observable.timer(50, 50).mapTo("first"),
    Rx.Observable.timer(40, 40).mapTo("second")
)
    .take(10)
    .subscribe(data => {
        console.log(data);
    });