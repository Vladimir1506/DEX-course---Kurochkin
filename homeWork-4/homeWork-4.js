//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (name,func) => {
  let counter=0;
  return function(){
    counter+=1;
    console.log(`Функция ${name} вызвана ${counter} раз`);
    return func.apply(this,arguments);
  }
};

//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (name,func) => {
return function(){
  console.log(`Функция ${name} вызвана с параметрами (${name}, ${func})`);
  return func.apply(this,arguments);
}
};

//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов

// Некорректно работает

export const curry = (func) =>{
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
  };