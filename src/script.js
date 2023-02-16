// Animate ... dots
let dotSpans = document.getElementsByClassName('loadingDots');
let possibleDots = [".\u2003", "..\u2000\u2005", "...\u2000", "....\u00a0", "....."];
var dotIndex = 0;
animateDots();
function animateDots() {
	for(let element of dotSpans) {
		element.textContent = possibleDots[dotIndex];
	}
	if(dotIndex >= possibleDots.length - 1)
		dotIndex = 0;
	else
		dotIndex++;
	setTimeout(animateDots, 1000);
}

// Display opening hours of today
let hrs = document.getElementById('hrs-actual');
const date = new Date();
let day = date.getDay();
if (day <= 5 && day >= 1)
	hrs.innerHTML = '<i>8:00 - 18:00</i>';
else if (day == 6)
	hrs.innerHTML = '<i class="accent">9:00 - 12:00</i>';
else
	hrs.innerHTML = '<b><i class="danger"> CLOSED &ensp;</i></b>';