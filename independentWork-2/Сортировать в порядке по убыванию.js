let arr = [5, 2, 1, -10, 8];

function desc(a,b){
	return -(a-b);
}
arr.sort(desc);

alert( arr ); // 8, 5, 2, 1, -10