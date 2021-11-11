function multiplyNumeric(obj){
	for(let key in obj){
		!(isNaN(obj[key]*2))&&(obj[key]*=2)
	}
	return obj;
}
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
for(let i in menu){
console.log(menu[i]);
}