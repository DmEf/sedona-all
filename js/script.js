var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var mainNavToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
	if (navToggle.classList.contains('page-header__toggle--open')) {
		navToggle.classList.remove('page-header__toggle--open');

		navMain.classList.add('main-nav--open');
	}
});
mainNavToggle.addEventListener('click', function() {
	if (mainNavToggle.classList.contains('main-nav__toggle--close')) {
		navMain.classList.remove('main-nav--open');
		navToggle.classList.add('page-header__toggle--open');
	}
});
			
		