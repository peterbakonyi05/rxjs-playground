const Rx = require('rxjs');

let count = 0;

function getObservable() {
    if (count++ > 3) {
        console.log("returning success");
        return Rx.Observable.of("success");
    } else {
        console.log("returning error");
        return Rx.Observable.throw(2)
    };
}

Rx.Observable.of("something")
    .switchMap(() => getObservable())
    .retryWhen(errors => {
        console.log("retry when", errors);
        return errors.scan(errorCount => {
            console.log("errorCount", errorCount);
            return ++errorCount
        }, 0);
    })
    .take(5)
    .delayWhen(retryCount => {
        const retryDelay = retryCount * 1000;
        return Rx.Observable.timer(retryDelay);
    })
    .subscribe(result => console.log("result", result));