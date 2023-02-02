// Animate ... dots
let dotSpans = document.getElementsByClassName('loadingDots');
let possibleDots = [".", "..", "...", "....", "....."];
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