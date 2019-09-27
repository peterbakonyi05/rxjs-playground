/**
 * This is the expected behavior, but it can be tricky.
 * You never enter the subscribe, but it still completes.
 * 
 * OUTPUT: "complete"
 */

const { combineLatest, interval } = require('rxjs');
const { first, tap, mergeMap } = require('rxjs/operators');

interval(500).pipe(
    first(),
    mergeMap(() => combineLatest(
        interval(1000).pipe(tap(v => console.log(v))),
        interval(5000).pipe(tap(v => console.log(v)))
    )),
    first()
)
    .subscribe(
        data => console.log("next", data),
        err => console.log("err", err),
        () => console.log("complete")
    );