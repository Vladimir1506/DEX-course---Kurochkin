function formatDate(date){
let time = Date.now()-date.getTime();
	if(time/1000 < 1){
	return "Прямо сейчас";
	} else if (time/(1000*60)<1){
	return `${Math.round(time/1000)} сек. назад`
	} else if (time/(1000*60*60)<1){
	return `${Math.round(time/(1000*60))} мин. назад`
	} else
	return date.toLocaleString();
}
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );