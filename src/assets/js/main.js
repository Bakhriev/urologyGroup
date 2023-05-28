const dropdownInit = () => {
  document.addEventListener('click', e => {
    let currentDropdown
    if (e.target.closest('[data-dropdown]')) {
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove('active')
    })
  })
  const allDropdowns = document.querySelectorAll('[data-dropdown]')
  if (window.innerWidth > 992) {
    allDropdowns.forEach(d => {
      d.addEventListener('mouseover', () => {
        d.classList.add('active')
      })
      d.addEventListener('mouseleave', () => {
        d.classList.remove('active')
      })
    })
  }
}

function burgerMenu() {
  const burger = document.querySelector('.burger')
  const navigation = document.querySelector('.header__nav')
  const overlay = document.querySelector('.overlay')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navigation.classList.toggle('active')
    overlay.classList.toggle('active')
  })

  overlay.addEventListener('click', () => {
    burger.classList.remove('active')
    navigation.classList.remove('active')
    overlay.classList.remove('active')
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      burger.classList.remove('active')
      navigation.classList.remove('active')
      overlay.classList.remove('active')
    }
  })
}

burgerMenu()
dropdownInit()

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 100,
  // centeredSlides: true,
  navigation: {
    nextEl: '.feedback__next-btn',
    prevEl: '.feedback__prev-btn',
  },
})

const feedbackCurrentSlide = document.querySelector('.feedback__current-slide')

document.querySelector('.feedback__slide-count').textContent =
  document.querySelectorAll('.swiper-slide').length

swiper.on('slideChange', function () {
  feedbackCurrentSlide.textContent = swiper.activeIndex + 1
})
