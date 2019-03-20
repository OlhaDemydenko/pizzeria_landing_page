let menuBtn = document.getElementsByClassName('menu-btn')[0];
let menuList = document.getElementsByClassName('top-nav_menu')[0];
let nav = document.getElementById("menu-block");
let logoCol = document.getElementsByClassName('menu-column')[0];
let menuCol = document.getElementsByClassName('menu-column')[1];

menuBtn.addEventListener('click', function(e){
	e.preventDefault();
	menuBtn.classList.toggle('menu-btn_active');
	menuList.classList.toggle('drop-down');
	nav.classList.toggle('nav_drop-down');
	// logoCol.classList.toggle('col-12');
	// menuCol.classList.toggle('col-12');
})


