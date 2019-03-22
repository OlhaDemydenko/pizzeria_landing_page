let menu = document.getElementById("menu-block");
let secondScreen = document.getElementById("aboutus-screen");


window.onscroll = function() {
	let interval = secondScreen.getBoundingClientRect().top;
	let show = interval + window.pageYOffset;
	if(menu.classList.contains('fixed') && interval >= 150){
		menu.classList.remove('fixed');
	}
	else if (interval < 150){
		menu.classList.add('fixed');
	}
};
