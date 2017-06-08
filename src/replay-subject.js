const Rx = require('rxjs');

const s = new Rx.ReplaySubject();

s.next(1);
s.next(2);
s.next(3);

s.subscribe(d => console.log("FIRST", d));

s.next(4);

s.subscribe(d => console.log("SECOND", d));