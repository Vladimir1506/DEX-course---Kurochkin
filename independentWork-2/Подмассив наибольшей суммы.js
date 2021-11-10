let arr = [-1, 2, 3, -9];
function getMaxSubSum(arr){
if (arr.length==1){
alert('One element');
alert(arr);
 return arr;}
	if ((sum(arr)-arr[0])>(sum(arr))){
arr.shift();
alert('Delete first');
alert(arr);
getMaxSubSum(arr);
} else if ((sum(arr)-arr[arr.length-1])>sum(arr)){
arr.pop();
alert('Delete last');
alert(arr);
getMaxSubSum(arr);
} else return arr;
   
}
function sum(arr){
	let sum=0;
for (let a of arr){
	sum += a;
}
return sum;
}
let result = getMaxSubSum(arr);
alert(result);