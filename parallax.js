document.addEventListener('mousemove', parallaxMainPictures)

function parallaxMainPictures(e) {
   if (scrollY < document.querySelector('.main-screen').offsetHeight) {
      this.querySelectorAll('.main-screen__image').forEach(picture => {
         const speed = picture.getAttribute('data-speed')
         const x = (window.innerWidth - e.pageX * speed) / 100
         const y = (window.innerHeight - e.pageY * speed) / 100

         picture.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
   }
}
