let cost = prompt('Введите стоимость','');
function extractCurrencyValue(cost){
	return parseInt(cost.slice(1));
}
alert(extractCurrencyValue(cost));