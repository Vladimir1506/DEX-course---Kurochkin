//#1
// Раскоментировать код и починить ошибку чтобы отработала консоль

import { moduleFirst } from "./module1";

class ClassFirst {
  constructor(prop1) {
    this.prop1 = prop1;
  }
}

class ClassSecond extends ClassFirst {
  constructor(prop1, prop2) {
    super(prop1);
    this.prop2 = prop2;
  }
}

class ClassThird extends ClassSecond {
  constructor(prop1, prop2, prop3) {
    super(prop1, prop2);
    this.prop3 = prop3;
  }
}

const instance = new ClassThird('prop1', 'prop2', 'prop3');
console.log('PROPS =>', instance.prop1, instance.prop2, instance.prop3);


//#2
// Создать класс со свойствами title и date
// и статическим свойством , которое при вызове
// всегда возвращает новый экземпляр газеты с текущей датой


export class NewsPaper {

  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createNewPaper(title) {
    const date = new Date().toLocaleDateString();
    const newP = new NewsPaper(title, date);
    return newP;
  };

}


// #3 Создать иерархию классов
// ThirdCalculate -> SecondCalculate -> CalculateBase
// чтобы при вызове метода calculate у Класса ThirdCalculate
// выводилась строка


// ThirdCalculate: 1 SecondCalculate: 2 CalculateBase: 3

class CalculateBase {

  constructor() {
    this.count = 0
  }
  calculate() {
    return `CalculateBase ${++this.count}`
  }
}

class SecondCalculate extends CalculateBase {
  constructor() {
    super();
  }
  calculate() {
    return `SecondCalculate ${++this.count} ${super.calculate()}`
  }

}

class ThirdCalculate extends SecondCalculate {
  constructor() {
    super();
  }
  calculate() {
    return `ThirdCalculate ${++this.count} ${super.calculate()}`
  }

}


const calc = new ThirdCalculate();
console.log(calc.calculate());


//#4
//написать функцию которая будет вызывать нужный модуль
//по передаваемом типу first или second

export const callCurrentModule = (type) => {
  if (type == "first") {
    import('./module1.js')
      .then(module => module.moduleFirst())
      .catch(error => console.log('Error:' + error.message))
  } else if (type == "second") {
    import('./module2.js')
      .then(module => module.moduleSecond())
      .catch(error => console.log('Error:' + error.message))
  } else console.log('На входе некорректные данные')
};

//#5 написать функцию
// которая выведет в консоль 'PING'
// передаваемое кол-во раз , раз в секунду
function pinger(count) {
  if (count > 0) {
    console.log('PING')
    count--
    setTimeout(() => pinger(count), 1000);
  }

}
pinger(10);
