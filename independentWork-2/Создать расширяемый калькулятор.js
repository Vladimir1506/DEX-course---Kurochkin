function Calculator(){
	this.calculate = function(str){
	let splited = str.split(' ');
	switch (splited[1]){
		case '+': return +splited[0] + +splited[2];
		case '-': return +splited[0] - +splited[2];
		case '*':return splited[0]*splited[2];
		case '/':return splited[0]/splited[2];
		case '**':return splited[0]**splited[2];
	}
	return splited;
	}
}
let calc = new Calculator;

alert( calc.calculate("2 + 3") );
alert( calc.calculate("2 - 3") );
alert( calc.calculate("2 * 3") );
alert( calc.calculate("2 / 3") );
alert( calc.calculate("2 ** 3") );