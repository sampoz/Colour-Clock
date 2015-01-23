$(document).ready(function() {
	setSeconds(new Date().getSeconds());
	setMinutes(new Date().getMinutes());
	setHours(new Date().getHours());
	setBackground();
});

function setSeconds (secs) {
	secs = typeof secs !== 'undefined' ? secs : new Date().getSeconds();
	$("#SS").html(prependInt(secs))
			.css("background-color", ("#0000" + prepend(secs)
			));
}
function setMinutes (mins) {
	mins = typeof mins !== 'undefined' ? mins : new Date().getMinutes();
	$("#MM").html(prependInt(mins))
			.css("background-color", ("#00" + prepend(mins) + "00"
			));
}
function setHours (hours) {
	hours = typeof hours !== 'undefined' ? hours : new Date().getHours();
	$("#HH").html(prependInt(hours))
			.css("background-color", ("#" + prependHours(hours) +"0000"
			));
}
function setBackground () {
	var hours = new Date().getHours();
	var mins = new Date().getMinutes();
	var secs = new Date().getSeconds();
	$("#BG").css("background-color", ("#" + prependHours(hours) 
		+ prepend(mins) + prepend(secs)));
}
setInterval(setBackground, 1000);
setInterval(setSeconds, 1000);
setInterval(setMinutes, 60000);
setInterval(setHours, 3600000);

function prepend (i) {
	i = Math.floor(i/60*255);
	if(i<16) {
		return "0"+i.toString(16); 
	} else {
		return i.toString(16);	
	} 
}
function prependHours (i) {
	i = Math.floor(i/24*255);
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
// For tests

var testSecs = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
var testHours = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

$( "body" ).keydown(function(e) {
            if(e.keyCode == 37) { // left
                setSeconds(testSecs());
            }
              else if(e.keyCode == 38) { // up?
                setMinutes(testSecs());
            }

              else if(e.keyCode == 39) { // right
                setHours(testHours());
            }
        });
