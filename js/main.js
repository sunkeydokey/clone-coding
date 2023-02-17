// search element in header
const searchElement = document.querySelector('.search');
const searchInputElement = searchElement.querySelector('input');

searchElement.addEventListener('click', () => {
  searchInputElement.focus();
});

searchInputElement.addEventListener('focus', () => {
  searchElement.classList.add('focused');
  searchInputElement.setAttribute('placeholder', '통합검색');
});

searchInputElement.addEventListener('blur', () => {
  searchElement.classList.remove('focused');
  searchInputElement.setAttribute('placeholder', '');
});

// badges
const badgeElement = document.querySelector('header .badges');
const toTopElement = document.querySelector('#to-top');

window.addEventListener(
  'scroll',
  // _.throttle(함수, 시간)
  _.throttle(() => {
    if (window.scrollY > 500) {
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeElement, 0.6, {
        opacity: 0,
        display: 'none',
      });

      gsap.to(toTopElement, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeElement, 0.6, {
        opacity: 1,
        display: 'block',
      });

      gsap.to(toTopElement, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopElement.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// fade-in effects in visual section
const fadeElements = document.querySelectorAll('.visual .fade-in');

fadeElements.forEach((fadeElement, index) => {
  gsap.to(fadeElement, 1, { delay: (index + 1) * 0.7, opacity: 1 });
});

// swiper

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

new Swiper('.awards .swiper-container', {
  slidesPerView: 5,
  loop: true,
  autoplay: true,
  spaceBetween: 30,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

// promotion

const promotionElement = document.querySelector('.promotion');
const promotionToggleButton = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleButton.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionElement.classList.add('hide');
  } else {
    promotionElement.classList.remove('hide');
  }
});

// floating obj

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const floatingObject = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

// ScrollMagic

const spyElements = document.querySelectorAll('section.scroll-spy');
spyElements.forEach((spyElement) => {
  new ScrollMagic.Scene({
    triggerElement: spyElement,
    triggerHook: 0.8,
  })
    .setClassToggle(spyElement, 'show')
    .addTo(new ScrollMagic.Controller());
});

// This year
const thisYear = document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear();
