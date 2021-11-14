function sumArgs(){
return [].reduce.call(arguments,(sum,cur)=>sum+cur,0);
}

alert(sumArgs(1,2,3));