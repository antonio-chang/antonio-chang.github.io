
// MENU SHOW
const showMenu = (toggleId, navId) => {

  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

//ACTIVE AND REMOVE MENU
//querySelectorAll is for class!
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {

  //Active link
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  //Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {

  //remove all style
  slides.forEach((slide) => {
    slide.style.display = "none"
  })

  dots.forEach((dot) => {
    dot.classList.remove("active")
  })

  //active currentSlide  
  slides[n].style.display = "block"
}

//DOMContentLoaded -> start !!! init!
document.addEventListener("DOMContentLoaded", init(currentSlide))

////////////////////////////////////////////////////////////////////////////////////////
//work on selecting buttom
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    init(i)
    currentSlide = i
  })
})

////////////////////////////////////////////////////////////////////////////////////////
//wprk on next and previous
const next = () => {
  if (currentSlide == slides.length - 1) {
    currentSlide = 0
  } else {
    currentSlide++;
  }
  init(currentSlide)
}

const prev = () => {
  if (currentSlide == 0) {
    currentSlide = slides.length - 1
  } else {
    currentSlide--;
  }
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)
document.querySelector(".prev").addEventListener('click', prev)

////////////////////////////////////////////////////////////////////////////////////////
//work on interval
setInterval(() => {
  next()
}, 2500);



