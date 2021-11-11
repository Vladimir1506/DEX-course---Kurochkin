let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj){
  let sum=0;
  for(let val of Object.values(obj)){
    sum+=val;
  }
  return sum;
}

alert( sumSalaries(salaries) ); // 650