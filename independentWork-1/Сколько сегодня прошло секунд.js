function getSecondsToday(){
	let now = new Date();
	let today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
	return (now-today.getTime())/1000;
}
alert(getSecondsToday());