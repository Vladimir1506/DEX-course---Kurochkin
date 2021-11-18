// Создать функцию обёртку
// которая в начало каждой строки будет добавлять слово "Hello"

const funcChild = funcContainer("Hello ");
function funcContainer(str1){
  return function(str2){
    return str1+str2;
  }
  }
console.log(funcChild("word"));
console.log(funcChild("Ben"));


// Создать функцию, которая будет выполняться как func(1)(2)(3)
const funcСurrying = (num1)=>(num2)=>(num3)=>num1+num2+num3;

console.log("funcСurrying(1)(3)(4) ", funcСurrying(1)(3)(4));

//function funcСurrying(num1){(num2)=>(num3)=>num1+num2+num3};
// function funcСurrying(num1){
//   return function(num2){
//     return function(num3){
//       return num1+num2+num3;
//     }
//   }
// }


// Создать функцию, которая будет выполняться
// при вызове func(1,2,3), func(1,2)(3),func(1)(2,3), func(1)(2)(3)
// и возвращать их сумму

function funcСurryingArgs(...args) {
  console.log("ARGS =>", args);
  if (args.length >= 3) {
    return args.reduce((total, current) => total + current);
  } else 
    return (...numbs) => {
      console.log("NUMBER =>", numbs.concat(args));
      return funcСurryingArgs(...numbs.concat(args));
    };
}

console.log("funcСurryingArgs(1,3,4) ", funcСurryingArgs(1, 3, 4));
console.log("funcСurryingArgs(1,3)(4) ", funcСurryingArgs(1, 3)(4));
console.log("funcСurryingArgs(1)(3,4) ", funcСurryingArgs(1)(3, 4));
console.log("funcСurryingArgs(1)(3)(4) ", funcСurryingArgs(1)(3)(4));



// Создать функцию обёртку
// которая будет принимать количество аргументов
// и считать сумму передаваемых чисел , после того как кол-во аргументов
// будет равнятся передаваемому значению

function funcСurryingCount(count){
  return function funcCurrent(...args){
    if (args.length>=count){
      return args.reduce((total,current)=>total+current,0);
    } else {
      return (...nums)=> funcCurrent(...nums.concat(args));
    }
  }
}

 const funcCurrent = funcСurryingCount(3);

console.log("funcCurrent(1,3,4) ", funcCurrent(1, 3, 4));
console.log("funcCurrent(1,3)(4) ", funcCurrent(1, 3)(4));
console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3, 4));
console.log("funcCurrent(1)(3)(4) ", funcCurrent(1)(3)(4));

