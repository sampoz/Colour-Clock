setSeconds();
setMinutes();
setHours();

function setSeconds () {
	var secs = new Date().getSeconds();
	$("#SS").html(prependInt(secs))
			.css("background-color", ("#0000" + prepend(secs)
			));
}
function setMinutes () {
	var mins = new Date().getMinutes();
	$("#MM").html(prependInt(mins))
			.css("background-color", ("#00" + prepend(mins) + "00"
			));
}
function setHours () {
	var hours = new Date().getHours();
	$("#HH").html(prependInt(hours))
			.css("background-color", ("#" + prepend(hours) +"0000"
			));
}
function setBackground () {
	var hours = new Date().getHours();
	var mins = new Date().getMinutes();
	var secs = new Date().getSeconds();
	$("#BG").css("background-color", ("#" + prepend(hours) 
		+ prepend(mins) + prepend(secs)
			));
}
setInterval(setBackground, 1000);
setInterval(setSeconds, 1000);
setInterval(setMinutes, 60000);
setInterval(setHours, 3600000);

function prepend (i) {
	i = Math.floor(i/60*255);
	if(i<10) {
		return "0"+i.toString(16); 
	} else {
		return i.toString(16);	
	} 
}
function prependInt (i) {
	if(i<10) {
		return "0"+i.toString(); 
	} else {
		return i.toString();	
	} 
}