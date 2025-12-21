/*=============== HOME SPLIT TEXT ===============*/
const { animate , text, stagger} = anime;

const { chars: chars1 } = text.split('.home__profession-1', {chars: true})
const { chars: chars2 } = text.split('.home__profession-2', {chars: true})

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView:'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
  },
  /* autoplay: {
  delay: 3000,
  disableOnInteraction: false,
  } */
})


/*=============== WORK TABS ===============*/


/*=============== SERVICES ACCORDION ===============*/
const servicesButtons = document.querySelectorAll('.services__button')
servicesButtons.forEach(button => {
  //add your height to services info
  const heightInfo = document.querySelector('.services__info')
  heightInfo.style.height = heightInfo.scrollHeight + 'px'

  button.addEventListener('click', () =>{
    const servicesCards = document.querySelectorAll('.services__card'),
          currentCard = button.parentNode,
          currentInfo = currentCard.querySelector('.services__info'),
          isCardOpen = currentCard.classList.contains('services-open')

    // close all other services info
    servicesCards.forEach(card =>{
      card.classList.replace('services-open', 'services-close')

      const info = card.querySelector('.services__info')
          info.style.height = '0'
    })

    //open only if not already open
    if(!isCardOpen){
      currentCard.classList.replace('services-close', 'services-open')
      currentInfo.style.height = currentInfo.scrollHeight + 'px'
    }
  })
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent
copyBtn.addEventListener('click', () =>{
  //Use the clipboard API to copy text
  navigator.clipboard.writeText(copyEmail).then(() =>{
    copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

    //Restore the original text
    setTimeout(() => {
      copyBtn.innerHTML = 'copy email <i class="ri-file-copy-line"></i>'
    }, 2000)
  })
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
document.addEventListener('DOMContentLoaded', () => {
  const textYear = document.getElementById('footer-year');
  if (textYear) {
    textYear.textContent = new Date().getFullYear();
  }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  //we get the position by scrolling down
  const scrollY = window.scrollY

  sections.forEach(section => {
    const id = section.id, //id of each section
          top = section.offsetTop - 50, //distance from the top edge
          height = section.offsetHeight,
          link = document.querySelector('.nav__menu a[href*="' + id + '"]') //id nav link
    
    if(!link) return

    link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')

if (cursor) {
  window.addEventListener('mousemove', e => {
    cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`
  })
}


/* Hide custom cursor on links */
const a = document.querySelectorAll('a')

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hide-cursor')
  })
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hide-cursor')
  })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  //reset: true, // Animations repeat
})

sr.reveal('.home__image, .projects__container, .education__container, .contact__container')
sr.reveal(`.home__data`, {delay: 900, origin: 'bottom'})
sr.reveal(`.home__info`, {delay: 1200, origin: 'bottom'})
sr.reveal(`.home__social, .home__cv`, {delay: 1500})
sr.reveal('.about__data', { origin:'left', distance:'40px' })
sr.reveal('.about__image', { origin:'right', distance:'40px' })
sr.reveal(`.services__card`, {interval: 100})