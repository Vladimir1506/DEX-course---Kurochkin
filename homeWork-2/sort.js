export const sort = (data) => {
  //TODO: Отсортируйте массив строк по алфавиту
function sortData(a,b){
  return a.localeCompare(b);
}
  return  data.sort(sortData);
};