import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
const getData = (str) => {
  return compareText(str)
    .catch((err) => {
      throw new Error(err.message)
    })
};
// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
const processingData = async (str) => {

  try {
    const answer = await getData(str);
    console.log("Success: " + answer)

  } catch (error) {
    console.log("Error: " + error.message)
  }

};
processingData("короткий текст");
processingData("длинный тексттттттттттт");

// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих
const getResponse = async (str) => {
  const result = await getData(str)
    .then((answer) => answer + " :)")
    .catch((error) => error.message + " :(")
    .then(data => addSymb(data, 20))

  function addSymb(str, maxLength) {
    const lastSymb = str.slice(-1);
    const strLength = str.length;
    return (strLength < maxLength) ? (str + lastSymb.repeat(maxLength - strLength)) : str;
  }

  console.log(result);
};

getResponse("короткий текст");
getResponse("Длинный текстттт");

// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      console.log(json);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log('Ошибка')
  }
};

getDataFromAPI("https://randomuser.me/api");
getDataFromAPI("https://randomuser123.me/api");
getDataFromAPI("https://randomuser.me/api123");
