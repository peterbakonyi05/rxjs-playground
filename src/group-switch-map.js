const { Observable, ObservableInput } = require("rxjs");
const { groupBy, mergeMap, switchMap } = require("rxjs/operators");

const groupSwitchMap = (project, groupBySelector) => source => source.pipe(
	groupBy(groupBySelector || defaultGroupBySelector),
	mergeMap(grouppedObservable => grouppedObservable.pipe(switchMap(project)))
);

function defaultGroupBySelector(data) {
	return JSON.stringify(data);
}

module.exports = {
	groupSwitchMap
}
