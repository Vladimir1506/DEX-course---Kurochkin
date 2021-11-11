function filterRange(arr,a,b){
	return arr.filter(item=>item>=a&&item<=b);
}
let arr = [5, 3, 8, 1];

alert(filterRange(arr,5,10));