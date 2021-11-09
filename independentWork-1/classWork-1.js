export const getHolidayPrizes = (fio, date, sum) => {
  let today = new Date();
 let dateBirth= new Date(Date.parse(date)) ;
if (today.getDate()==dateBirth.getDate()&&today.getMonth()==dateBirth.getMonth()){
   return `У ${fio} сегодня праздник, его премия составляет ${sum}`;
 }
};
