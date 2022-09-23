//string (textos)
//number (numero)
//boolean (true | false )
// window.addEventListener('scroll', onScroll)
var backtop = document.querySelector('.backToTopButton')
var navigation = document.querySelector('#navigation')


function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll()
}
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backtop.classList.add('show')
  } else {
    backtop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
 #home,
 #home img,
 #home .stats,
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content,
 #about img`)
