// const workerExample = {
//   name: "Igor",
//   age: 34,
//   address: {
//     street: "Lenin",
//     house: 23,
//     apartments: 16
//   },
//   userBonuses: {
//     2019: 700,
//     2020: 750,
//     2021: 100
//   },
//   wage: 500,
//   hobby: ["chess", "basketball"]
// };

// TODO: Отсортировать пользователей по уровню зп
// Вывод: отсортированные зп через запятую
export const getSortWage = (data) => {
  return data.map((item)=>item.wage).sort((a,b)=>a-b).join('; ');
};

// TODO: Вывести зп всех пользователей
// Число (сумма всех зп)
export const getWageSum = (data) => {
  return data.reduce((sum,current)=>sum+current.wage,0);
};

// TODO: Вывести пользователя с женским именем, знаем, что имя Ekaterina
export const getWomenName = (data) => {
  return data.find(item=>item.name.endsWith('a')).name;
};

// TODO: Вывести самого молодого и самого старшего пользователя
// Вывод: "Самого младшего пользователя зовут {...} и ему ${age}.
// Самого старшего пользователя зовут {...} и ему ${age}."
export const getMinMaxUserAge = (data) => {
const sortedData = data.sort((a,b)=>a.age-b.age);
return `Самого младшего пользователя зовут ${sortedData[0].name} и ему ${sortedData[0].age}
Самого старшего пользователя зовут ${sortedData[sortedData.length-1].name} и ему ${sortedData[sortedData.length-1].age}`
};

// TODO: Вывести кол-во пользователей, играющих в баскетбол
// Элемент выглядит как "basketball"
// Вывод: "В баскетбол играют {число} пользователей"
export const getBasketPlayers = (data) => {
  return data.filter(item=>item.hobby.includes('basketball')).length;
};

//TODO: Вывести  пользователей, у которых в адресе есть число, к примеру
// {street: "8 March"}
// Вывод: "По адресу {...} живут пользователи {...}"
export const getUsersAddress = (data) => {
  const arr= data.filter(item=>!isNaN(parseInt(item.address.street)));
  return `По адресу ${arr.map(item=>item.address.street)} живут пользователи ${arr.map(item=>item.name)}`;
};

//TODO: Вывести имена пользователей и количество их бонусов за все года, удвоить их
// Вывод: "Пользователи {...} получат соответственно {...} бонусов
export const getDoubleUserBonuses = (data) => {
const arr = data.map(item=>Object.values(item.userBonuses).reduce((sum,c)=>sum+c,0)*2);
return `Пользователи ${data.map(i=>i.name)} получат соответственно ${arr} бонусов`
};
