export const sum = (f, s) => {
  //TODO: Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи
function getNumber(c){
  let value = parseFloat(c.toString().replace(",","."));
  return isNaN(value)?0:value;
}
return getNumber(f) + getNumber(s);
};