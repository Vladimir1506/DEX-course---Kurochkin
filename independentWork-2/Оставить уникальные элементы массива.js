function unique(arr) {
for(k=0;k<arr.length;k++){
  for(i=k+1;i<arr.length;i++){
    if (arr[k]===arr[i]){
    arr.splice(i,1);
    unique(arr);
    }
  }
}
return arr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O