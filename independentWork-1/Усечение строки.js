let str = prompt('Введите строку','');
let maxLength = prompt('Введите максимальную длину строки');
function truncate(str,maxLength){
    if (str.length>maxLength) {
       return str.substr(0,maxLength-1)+"...";
    } else return str;
}
alert(truncate(str,maxLength));