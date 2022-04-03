'use strict';

document.addEventListener('DOMContentLoaded', function () {

	// Burger
	if (document.querySelector('.burger')) {
		let burgerWrap = document.querySelector('.burger');
		let burgerToggle = document.querySelector('.burger__toggle');
		let menu = document.querySelector('.menu');

		burgerWrap.onclick = function () {
			burgerToggle.classList.toggle('is-active');
			menu.classList.toggle('is-active');
		};

		document.addEventListener('click', (e) => {
			const withinMenu = e.composedPath().includes(menu);
			const withinBurger = e.composedPath().includes(burgerWrap);

			if (!withinMenu && !withinBurger) {
				menu.classList.remove('is-active');
				burgerToggle.classList.remove('is-active');
			}
		});
	}

	// Search 
	if (document.querySelector('.header__search')) {
		let searchBtn = document.querySelector('.header__search-btn');
		let searchInner = document.querySelector('.header__search-inner');
		let searchClose = document.querySelector('.header__search-close');

		searchBtn.addEventListener('click', function () {
			searchInner.classList.toggle('is-active');
		});

		searchClose.addEventListener('click', function () {
			searchInner.classList.remove('is-active');
		});
	}

	// Search input
	if (document.querySelector('.search-input')) {
		let search = document.querySelector('.search-input input');
		let searchReset = document.querySelector('.search-input__reset');

		search.addEventListener('input', function () {
			if (this.value != 0) {
				searchReset.classList.remove('is-hidden');
			} else {
				searchReset.classList.add('is-hidden');
			}
		});

		searchReset.addEventListener('click', function () {
			search.value = "";
			this.classList.add('is-hidden');
		});
	}

	// Show password button
	if (document.querySelector('.password-input')) {
		let passInput = document.querySelectorAll('.password-input');
		let passShowButtons = document.querySelectorAll('.password-input__show-btn');

		passInput.forEach(i => {
			i.addEventListener('input', function () {
				if (this.value != 0) {
					this.nextElementSibling.classList.remove('is-hidden');
				} else {
					this.nextElementSibling.classList.add('is-hidden');
					this.nextElementSibling.classList.remove('is-active');
					this.setAttribute('type', 'password');
				}
			});
		});

		for (let i of passShowButtons) {
			i.addEventListener('click', function () {
				let closestInput = this.previousElementSibling;

				i.classList.toggle('is-active');

				if (closestInput.getAttribute('type') == 'password') {
					closestInput.setAttribute('type', 'text');
				} else if (closestInput.getAttribute('type') == 'text') {
					closestInput.setAttribute('type', 'password');
				}
			});
		}

	}

	// Sctoll to top button
	if (document.querySelector('.scroll-top')) {

		let mybutton = document.querySelector(".scroll-top");

		window.onscroll = function () { scrollFunction() };
		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.classList.add('is-show');
			} else {
				mybutton.classList.remove('is-show');
			}
		}

		let stepTime = 5;
		let docBody = document.body;
		let focElem = document.documentElement;

		let scrollAnimationStep = function (initPos, stepAmount) {
			let newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;

			docBody.scrollTop = focElem.scrollTop = newPos;

			newPos && setTimeout(function () {
				scrollAnimationStep(newPos, stepAmount);
			}, stepTime);
		}

		let scrollTopAnimated = function (speed) {
			let topOffset = docBody.scrollTop || focElem.scrollTop;
			let stepAmount = topOffset;

			speed && (stepAmount = (topOffset * stepTime) / speed);

			scrollAnimationStep(topOffset, stepAmount);
		};

		mybutton.onclick = function () {
			scrollTopAnimated(1000);
		}
	}

	// Login
	if (document.querySelector('.login')) {
		let loginBtn = document.querySelector('.header__login');
		let loginPopup = document.querySelector('.login');
		let overlay = document.querySelector('.overlay');

		loginBtn.addEventListener('click', function () {
			loginPopup.classList.add('is-active');
			overlay.classList.add('is-active');
		});

		overlay.addEventListener('click', function () {
			loginPopup.classList.remove('is-active');
			overlay.classList.remove('is-active');
		});

	}

}, false); // <--------------------> //

// !console.log();



