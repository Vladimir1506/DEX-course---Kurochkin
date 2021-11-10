export const dataProcessingAboutSalary = (f, s) => {
  let result = parseInt(f)+parseInt(s);
  if (!isNaN(result)){
    return result;
  }else if (typeof f=="string"&&typeof s =="string"){
  return (f+" "+s);
} else if (typeof f=="boolean"&&typeof s =="boolean"&&f+s){
   return "It's true!"
 } else if (typeof f=="boolean"&&typeof s =="boolean"&&!f+s) 
 return "It's false!"
};

export const calculateCashback = (isCashback, sum, cb) => {
  if (isCashback&&!(isCashback==="false")){
    return Math.round(sum*parseFloat(cb))/100
  } else return "No casnback"
};

export const getHolidayPrizes = (fio, date, sum) => {
  let today = new Date();
 let dateBirth= new Date(Date.parse(date)) ;
if (today.getDate()==dateBirth.getDate()&&today.getMonth()==dateBirth.getMonth()){
   return `У ${fio} сегодня праздник, его премия составляет ${sum}`;
 }
};
