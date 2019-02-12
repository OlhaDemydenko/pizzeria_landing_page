var generalTitle = document.getElementById("generalTitle");
var perfectoTitle = document.getElementById("perfectoTitle");
var firstBtn = document.getElementById("firstBtn");
var firstScreen = document.getElementById("main-screen");
var pizzaTitle = document.getElementById("pizzaTitle");


var firstScreenPos = () => {
	
	generalTitle.classList.remove("main-photo");
	perfectoTitle.classList.remove("perfecto");
	firstBtn.classList.remove("first-btn_pos");
	pizzaTitle.classList.remove("pizza");
	
	let firstBtnCenter = document.createElement('div');
	firstBtnCenter.classList.add("col-12");
	
	firstBtnCenter.appendChild(firstBtn.cloneNode(true));
	
	firstScreen.appendChild(firstBtnCenter);

	generalTitle.removeChild(firstBtn);

}

var secondScreenPos = () => {
	
}

if (screen.width < 768) {
	firstScreenPos();
}





// console.log(screen.width);
// console.log(window.innerWidth);
// console.log(document.documentElement.clientWidth);