let login = prompt('Введите ваш логин','')
if (login=='Админ'){
	let password = prompt('Введите ваш пароль')
	if (password=='Я главный'){
	alert('Здравствуйте!')
	} else if (password==null){
	alert('Отменено')
	} else 
	alert('Неверный пароль')
} else if (login==''||login==null){
	alert('Отменено')
} else 
alert('Я вас не знаю')