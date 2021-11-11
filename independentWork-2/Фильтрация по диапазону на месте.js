function filterRangeInPlace(arr,a,b){
	arr.map((item,index)=>{if(item<a||item>b) arr.splice(index,1)});
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr,5,10);
alert(arr);