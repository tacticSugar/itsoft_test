// Burger-button
const burgerButton = document.querySelector('.burger-button')
const sideMenu = document.querySelector('.side-menu')
const sideLink = document.querySelectorAll('.side-menu__link')
const navMap = document.querySelector('.navigation__map')
const navSearch = document.querySelector('.navigation__search')

burgerButton.onclick = function () {
  burgerButton.classList.toggle('active-button')
  sideMenu.classList.toggle('active-menu')
  navMap.classList.toggle('hidden-button')
  navSearch.classList.toggle('hidden-button')
}

// Закрытие при нажатии на ссылку
// sideLink.onclick = function() {
//   console.log(sideLink);
//   burgerButton.classList.remove('active-button');
//   sideMenu.classList.remove('active-menu');
//   navMap.classList.remove('hidden-button');
//   navSearch.classList.remove('hidden-button');
// };

// Самый верхний слайдер

//Для маленьких экранов
function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth
}

if (getWindowWidth() <= 767) {
  let offset = 0 //Смещение от левого края
  const sliderLine = document.querySelector('.slider-line')
  const sliderNext = document.querySelector('.slider-next')
  const sliderPrev = document.querySelector('.slider-prev')

  sliderPrev.addEventListener('click', function () {
    offset = offset - 364
    sliderNext.disabled = false
    if (offset < 0) {
      offset = 0
      sliderPrev.disabled = true
    }
    sliderLine.style.left = -offset + 'px'
  })

  sliderNext.addEventListener('click', function () {
    offset = offset + 364
    sliderPrev.disabled = false
    if (offset > 768) {
      offset = 728
      sliderNext.disabled = true
    }
    sliderLine.style.left = -offset + 'px'
  })
}

if (getWindowWidth() >= 767) {
  //Для больших экранов
  const sliderNext = document.querySelector('.slider-next')
  const sliderPrev = document.querySelector('.slider-prev')

  function rotate() {
    let slides = document.querySelectorAll('.slide')
    for (i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('active-item')) {
        slides[i].classList.remove('active-item')
        slides[i].classList.add('left-item')
      } else if (slides[i].classList.contains('left-item')) {
        slides[i].classList.remove('left-item')
        slides[i].classList.add('right-item')
      } else if (slides[i].classList.contains('right-item')) {
        slides[i].classList.remove('right-item')
        slides[i].classList.add('active-item')
      } else if (slides[i].classList.contains('right-item-reverse')) {
        slides[i].classList.remove('right-item-reverse')
        slides[i].classList.add('right-item')
      } else if (slides[i].classList.contains('left-item-reverse')) {
        slides[i].classList.remove('left-item-reverse')
        slides[i].classList.add('left-item')
      } else {
        slides[i].classList.remove('active-item-reverse')
        slides[i].classList.add('active-item')
      }
    }
  }
  function rotateBackwards() {
    let slides = document.querySelectorAll('.slide')
    for (i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('active-item')) {
        slides[i].classList.remove('active-item')
        slides[i].classList.add('active-item-reverse')
      } else if (slides[i].classList.contains('left-item')) {
        slides[i].classList.remove('left-item')
        slides[i].classList.add('left-item-reverse')
      } else if (slides[i].classList.contains('right-item')) {
        slides[i].classList.remove('right-item')
        slides[i].classList.add('right-item-reverse')
      } else if (slides[i].classList.contains('right-item-reverse')) {
        slides[i].classList.remove('right-item-reverse')
        slides[i].classList.add('left-item-reverse')
      } else if (slides[i].classList.contains('left-item-reverse')) {
        slides[i].classList.remove('left-item-reverse')
        slides[i].classList.add('active-item-reverse')
      } else if (slides[i].classList.contains('active-item-reverse')) {
        slides[i].classList.remove('active-item-reverse')
        slides[i].classList.add('right-item-reverse')
      }
    }
  }
  sliderNext.onclick = rotate
  sliderPrev.onclick = rotateBackwards
}

// Text hidden tip
const tip = document.querySelector('.advantages__hidden-text')
const tipTrigger = document.querySelector('.hidden-trigger')
tipTrigger.onclick = function () {
  tip.classList.toggle('advantages__hidden-text-active')
}
// Text hidden tip end

// Reviews popup
const popupTrigger = document.querySelectorAll('.popup-trigger')
const reviewsPopup = document.querySelector('.reviews__popup')
const reviewsCloseButton = document.querySelector('.reviews__close-button')

popupTrigger.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    reviewsPopup.classList.add('reviews__popup-active')
  })
})

reviewsCloseButton.addEventListener('click', function () {
  reviewsPopup.classList.remove('reviews__popup-active')
})

//Disclaimer
const discExit = document.querySelector('.disclaimer-exit')
const disc = document.querySelector('.disclaimer')
discExit.addEventListener('click', function () {
  disc.style.visibility = 'hidden'
})
