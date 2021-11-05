function readNumber(){
let value = +prompt('Введите число','');
if (isNaN(value)) 
readNumber()
else if (value==null)
return
else 
return value
}
readNumber()