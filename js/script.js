//NAVBAR SCROLL COLOR//
const navEl = document.querySelector('.navbar');

    window-addEventListener('scroll', () => {
      if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
      } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
      }
});

//COUNTER - HOME//
$(document).ready(function(){
    $(".counter").counterUp({
      delay: 10,
      time: 1200
    });
  });


// Bootstrap Validation//
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


//Preloader//

function pageLoaded() {
  let loaderSection = document.querySelector('.preloader');
  loaderSection.classList.add('loaded');
}

document.onload = pageLoaded();

