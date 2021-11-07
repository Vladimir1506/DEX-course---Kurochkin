let str = prompt('Введите строку','')
function checkSpam(str){
    return /viagra/i.test(str)||/xxx/i.test(str);
}
alert(checkSpam(str));