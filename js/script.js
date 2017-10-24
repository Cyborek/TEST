document.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.querySelector('#hamburger'),
		  cross = document.querySelector('#cross'),
		  nav = document.querySelector('#nav'),
		  menuButton = document.querySelector('#menu-button'),
		  navList = document.querySelector('#menu-list');
	
	const closeAndOpenMenu = () => {
		hamburger.classList.toggle('menu-button__icon--disabled');
		cross.classList.toggle('menu-button__icon--disabled');
		nav.classList.toggle('nav--disabled');
	}
	
	menuButton.addEventListener('click', closeAndOpenMenu );
	
	navList.addEventListener('click', (e) => {
		if( e.target && e.target.nodeName == "A" ) {
			closeAndOpenMenu();
		}
	} );
	
	const sliderPhotos = document.querySelectorAll(".slider__photo"),
		  sliderButtons = document.querySelectorAll(".buttons-bar__button"),
		  buttonsBox = document.querySelector(".buttons-bar");
	
	let i = 0;
	
	const slider = () => {
		if( i === 2) {
			sliderButtons[i].classList.toggle('buttons-bar__button--active');
			sliderPhotos[i].classList.toggle('slider__photo--active');
			i = 0;
			sliderButtons[i].classList.toggle('buttons-bar__button--active');
			sliderPhotos[i].classList.toggle('slider__photo--active');
		} else {
			sliderPhotos[i].classList.toggle('slider__photo--active');
			sliderButtons[i].classList.toggle('buttons-bar__button--active');
			sliderButtons[i+1].classList.toggle('buttons-bar__button--active');
			sliderPhotos[i+1].classList.toggle('slider__photo--active');
			i++;
		}
	}
	
	let sliderTimer = setInterval(slider, 6000);
	
	buttonsBox.addEventListener('click',(e) => {
		if( e.target && e.target.nodeName == "BUTTON"){
			sliderButtons[i].classList.toggle('buttons-bar__button--active');
			sliderPhotos[i].classList.toggle('slider__photo--active');
			i = parseInt(e.target.id);
			sliderButtons[i].classList.toggle('buttons-bar__button--active');
			sliderPhotos[i].classList.toggle('slider__photo--active');
		}
	});
	
} );