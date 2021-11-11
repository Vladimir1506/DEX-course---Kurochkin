let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr){
	return Math.round(arr.reduce((sum,current)=>sum + +current.age,0)/arr.length);
}
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28