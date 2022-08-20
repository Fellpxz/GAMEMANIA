window.addEventListener('scroll', onScroll)

function onScroll() {
  showBackToTopButtonOnScroll()
}

const topButton = document.querySelector('#backToTopButton')

function showBackToTopButtonOnScroll() {
  if (scrollY > 1025) {
    topButton.classList.add('show')
  } else {
    topButton.classList.remove('show')
  }
}
