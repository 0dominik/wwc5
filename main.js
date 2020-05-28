// google maps //

const map = new google.maps.Map(document.querySelector('.map'), {
	center: {lat: 50.211311, lng: -5.481887},
  zoom: 16,
  mapTypeId: 'roadmap'
});

const marker = new google.maps.Marker({
	position: {lat: 50.211311, lng: -5.481887},
	map: map
})

//smooth scroll //

function smoothScroll(anchor, px) {
	$('html, body').animate({
		scrollTop: $(anchor).offset().top - px
	}, 800);
}

for(let i = 2; i <= 5; i++) {
	$(`.link-${i}`).click(() => {
		smoothScroll(`#section-${i}`, 60);
})}

$(`.page-header__logo, .link-1, .to-top`).click(() => {
	smoothScroll(`#section-1`, 80);
})

// navbar // 

$(window).scroll(() => {
	const header = $('.page-header');
	const headerHeight = header.height();

	if(pageYOffset > headerHeight) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}
})

// filter gallery //

const work = document.querySelectorAll('.work');
const categories = $('#all, #web, #print')

categories.on('click', () => {
	const all = document.querySelector('#all');
	const web = document.querySelector('#web');
	const print = document.querySelector('#print');

	const webImg = document.querySelectorAll('.web');
	const printImg = document.querySelectorAll('.print');

	if(all.checked) {
		work.forEach(element => element.classList.remove('active'))
	} else if(web.checked) {
		webImg.forEach(element => element.classList.remove('active'))
		printImg.forEach(element => element.classList.add('active'))
	} else if(print.checked) {
		printImg.forEach(element => element.classList.remove('active'))
		webImg.forEach(element => element.classList.add('active'))
	}
})

// modal //

const show = document.querySelectorAll('.icon-eye');
const img = document.querySelectorAll('.work__img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img');
const next = document.querySelector('.modal__next');
const prev = document.querySelector('.modal__prev');
let position;

for(let i = 0; i <= 5; i++) {
	show[i].addEventListener('click', () => {
		modal.classList.add('active');
		modalImg.src = img[i].src;
		position = i;	
	});
}

next.addEventListener('click', () => {
	position++
	if(position >= 6) {
		position = 0;
	}	
	while((work[position].classList.contains('active'))) {
		console.log(position);
		position++
		if(position >= 6) {
			position = 0;
		}	
	}
	modalImg.src = img[position].src;
})

prev.addEventListener('click', () => {
	position--
	if(position <= -1) {
		position = 5;
	}	
	while((work[position].classList.contains('active'))) {
		console.log(position);
		position--
		if(position <= -1) {
			position = 5;
		}	
	}
	modalImg.src = img[position].src;
})

modal.addEventListener('click', (e) => {
	if(e.target != modalImg && e.target != prev && e.target != next) {
		modal.classList.remove('active');
	}
})

// slider //

const sliderElem = document.querySelector('.slider')
const dotElems = sliderElem.querySelectorAll('.slider-dots__dot')

dotElems.forEach(dotElem => {		
	dotElem.addEventListener('click', () => {
		dotElems.forEach(dotElem => dotElem.classList.remove('active'));
		dotElem.classList.add('active');
		let newPos = dotElem.getAttribute('data-pos');

		sliderElem.setAttribute('data-pos', newPos)	
	})
	
})

// hamburger // 

const hamburger = document.querySelector('.hamburger'); 
const menu = document.querySelector('.menu__menu-list'); 

hamburger.addEventListener('click', () => {
	this.classList.toggle('active');
	this.getAttribute('aria-expanded') == 'false' ? this.setAttribute('aria-expanded', 'true') : this.setAttribute('aria-expanded', 'false');
	$('.menu__menu-list').slideToggle();
})

if (window.matchMedia('(max-device-width: 777px)').matches) {
	for(let i = 1; i <= 5; i++) {
		$(`.link-${i}`).click(() => {
			$('.menu__menu-list').slideToggle();
			hamburger.classList.remove('active');
		})}
}

//

$(document).scroll(() => {
	$('.work').height($('.work').width()*0.795);
})
