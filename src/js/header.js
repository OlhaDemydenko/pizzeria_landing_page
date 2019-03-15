let menuBtn = document.getElementsByClassName('menu-btn')[0];

menuBtn.addEventListener('click', function(e){
	e.preventDefault();
	menuBtn.classList.toggle('menu-btn_active');
})

