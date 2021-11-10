export const dateToString = (date) => {
  //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
date = new Date(date);

function formatDate(date){
  let dayMonth = date.getDate()
 dayMonth = String(dayMonth).length===1?"0"+dayMonth:dayMonth;
  return date.getFullYear()+":"+ (date.getMonth()+1)+":"+dayMonth;
}

function nearDay(date){
  let dateClear = new Date(date.getFullYear(),date.getMonth(),date.getDate());
  let today = new Date();
  let todayYMD = new Date(today.getFullYear(),today.getMonth(),today.getDate());
  let yesterday = new Date(today.getFullYear(),today.getMonth(),today.getDate()-1);
  let tomorrow = new Date(today.getFullYear(),today.getMonth(),today.getDate()+1);
  switch (dateClear.getTime()){
    case (yesterday.getTime()): 
    return 'Вчера';
    case(todayYMD.getTime()):
    return 'Сегодня';
    case(tomorrow.getTime()):
    return 'Завтра'
    default:
      return formatDate(date);
}
}
return nearDay(date);
};