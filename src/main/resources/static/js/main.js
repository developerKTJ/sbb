// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 페이지 스크롤에 따른 요소 제어

// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('body .hbadges');
const toTopEl = document.querySelector('#to-top');
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 상단으로 이동 버튼 보이기!
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 상단으로 이동 버튼 숨기기!
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});

toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});

//fade-in 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
//순차적으로 반복해서 처리
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity : 1
  });
});

//Swiper
new Swiper('.notice .swiper', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.promotion .swiper', {
  autoplay : true,
  loop : true,
  slidesPerView : 3,
  spaceBetween : 10,
  centeredSlides : true,
  pagination : {
    el: '.promotion .swiper-pagination',
    clickable : true
  },
  navigation : {
    prevEl: '.promotion .swiper-button-prev', 
    nextEl: '.promotion .swiper-button-next' 
  }
});

new Swiper('.awards .swiper', {
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-button-prev',
    nextEl : '.awards .swiper-button-next'
  }
});

// promotion toggle
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const ToggleIcon = document.querySelector('.toggle-promotion .material-icons')
// click event
promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
    ToggleIcon.classList.remove('rev');
  } else {
    promotionEl.classList.add('hide');
    ToggleIcon.classList.add('rev');
  }
});

//floating
gsap.to('.floating1', 1.5, {
  delay: 1, 
  y: 15, 
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

gsap.to('.floating2', 2, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
 
//Scroll animation
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ 
      triggerElement: spyEl,
      triggerHook: .8 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
});

//thisYear
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();