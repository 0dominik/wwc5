// google maps //

const map = new google.maps.Map(document.querySelector('.map'), {
  center: { lat: 50.211311, lng: -5.481887 },
  zoom: 16,
  mapTypeId: 'roadmap',
});

const marker = new google.maps.Marker({
  position: { lat: 50.211311, lng: -5.481887 },
  map: map,
});

// navbar //

window.onscroll = () => {
  const header = document.querySelector('.page-header');

  header.classList.toggle('scrolled', pageYOffset > header.offsetHeight);
};

// filter gallery //

const categories = document.querySelectorAll('.portfolio__categories__choose');
const works = document.querySelectorAll('.work');

categories.forEach((category) => {
  category.addEventListener('change', (e) => {
    const category = e.target.id;

    works.forEach((el) => {
      if (element.classList.contains(category) || category === 'all') {
        el.classList.remove('inactive');
      } else {
        el.classList.add('inactive');
      }
    });
  });
});

// modal //

const show = document.querySelectorAll('.icon-eye');
const img = document.querySelectorAll('.work__img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img');
const next = document.querySelector('.modal__next');
const prev = document.querySelector('.modal__prev');
let position;

show.forEach((el, i) =>
  el.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = img[i].src;
    position = i;
  }),
);

next.addEventListener('click', () => {
  position++;
  if (position > 5) {
    position = 0;
  }
  while (works[position].classList.contains('active')) {
    position++;
    if (position > 5) {
      position = 0;
    }
  }
  modalImg.src = img[position].src;
});

prev.addEventListener('click', () => {
  position--;
  if (position < 0) {
    position = 5;
  }
  while (works[position].classList.contains('active')) {
    position--;
    if (position < 0) {
      position = 5;
    }
  }
  modalImg.src = img[position].src;
});

modal.addEventListener('click', (e) => {
  if (e.target != modalImg && e.target != prev && e.target != next) {
    modal.classList.remove('active');
  }
});

// slider //

const sliderElem = document.querySelector('.slider');
const dotElements = sliderElem.querySelectorAll('.slider-dots__dot');

dotElements.forEach((dotEl) => {
  dotEl.addEventListener('click', () => {
    dotElements.forEach((dotElem) => dotElem.classList.remove('active'));
    dotEl.classList.add('active');
    let newPos = dotEl.getAttribute('data-pos');

    sliderElem.setAttribute('data-pos', newPos);
  });
});

// hamburger //

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__menu-list');

const displayMenu = () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');

  const ariaValue = hamburger.getAttribute('aria-expanded') === 'false' ? true : false;
  hamburger.setAttribute('aria-expanded', ariaValue);
};

hamburger.addEventListener('click', displayMenu);

if (window.matchMedia('(max-device-width: 777px)').matches) {
  for (let i = 1; i <= 5; i++) {
    const link = document.querySelector(`.link-${i}`);
    link.addEventListener('click', displayMenu);
  }
}
