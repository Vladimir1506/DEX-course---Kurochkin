function isEmpty(obj){
	let count=0;
	for (let key in obj){
		count++
	}
	return !!count;
}
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

