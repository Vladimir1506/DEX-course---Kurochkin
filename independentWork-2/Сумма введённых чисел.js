function sumInput(){
let arr = [];
let value=0;
while (!isNaN(value)&&value!==null&&value!=='')
	{
value= prompt('Введите значение','');
arr.push(+value);
	} 
arr.pop();
console.log(arr.reduce((sum, current)=>sum+current,0));
}
sumInput();
