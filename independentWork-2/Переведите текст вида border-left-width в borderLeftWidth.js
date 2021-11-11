function camelize(str){
let arr = str.split('');
arr.map((item,index)=>{
	if(item=='-') 
		arr.splice(index,2,arr[index+1].toUpperCase())
});
alert(arr);
return arr.join('');
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));