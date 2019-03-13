var generalTitle = document.getElementById("generalTitle");
var perfectoTitle = document.getElementById("perfectoTitle");
var firstBtn = document.getElementById("firstBtn");
var novisibleBtn = document.getElementById("novisible");
var firstScreen = document.getElementById("main-screen");
var pizzaTitle = document.getElementById("pizzaTitle");
var centerTitle = document.getElementById("centerTitle");
var newAboutText = document.getElementById("newAboutText");
var aboutTextCol = document.getElementById("aboutTextCol");
var aboutUsText = document.getElementById("aboutUsText");
var secondScreen = document.getElementById("secondScreen");


function firstScreenPos() {
	
	pizzaTitle.removeChild(novisibleBtn); //remove novisible button from div with title 'pizza'

	let firstBtnCenter = document.createElement('div'); //create div to clone first button (from title'perfecto)
	firstBtnCenter.classList.add("col-12");
	
	firstBtnCenter.appendChild(firstBtn.cloneNode(true)); //clone button to new div
	firstScreen.appendChild(firstBtnCenter); //add div with cloned button after first image

	generalTitle.removeChild(firstBtn); //delete already cloned button
	document.getElementsByClassName('perfecto-pizza')[0].style.flexDirection = "row";

}

function secondScreenPos() {
	let textClone = aboutUsText.cloneNode(true);
	newAboutText.classList.add("col-12");
	newAboutText.appendChild(textClone);

	aboutTextCol.removeChild(aboutUsText);
}

if (screen.width < 768) {
	firstScreenPos();
	secondScreenPos();
}





// console.log(screen.width);
// console.log(window.innerWidth);
// console.log(document.documentElement.clientWidth);