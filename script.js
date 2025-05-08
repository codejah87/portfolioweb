// /*=======================Menu icon==========*/
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.nav-bar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}
// /*======================= sticky navbar==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav-bar a');

window.onscroll = () => {
sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height)
      {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header .nav-bar a[href*= ' + id + ']').classList.add('active');
        });
        console.log("Click");
        
      }
});
// /*======================= sticky navbar==========*/

let navigationBar = document.querySelector('.navigation-bar');

navigationBar.classList.toggle('sticky', window.scrollY > 100);
/*======================= Remove menu icon nav-bar when click==========*/
menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');
};





// /*======================= sticky navbar==========*/

let darkModeIcon = document.querySelector('#darkMode-icon');
let dark = localStorage.getItem('dark'); // Consistent key

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('dark', 'active');
  darkModeIcon.classList.remove('bx-sun')
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode'); // Correct class removal
  localStorage.setItem('dark', null);
  darkModeIcon.classList.add('bx-sun')

};

if (dark === 'active') {
  enableDarkMode();
}

darkModeIcon.onclick = () => {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

// Song function

   let mysong =  document.querySelector('.mysong');
   let song_btn = document.getElementById('song_btn');
   let icon= document.getElementById('icon');

   song_btn.onclick = () => {
       if (mysong.paused) {
            mysong.play()
            icon.classList = 'bx bx-pause'
            song_btn.classList.add('active')
       }else{
         mysong.pause()
         icon.classList = 'bx bx-play'
         song_btn.classList.remove('active')
       }
       
   }


/*=======================About popup==========*/
  const aboutRead = document.querySelector('.about-read');
 const popAboutMe = document.querySelector('.pop-about-me');
 const container = document.querySelector('.container');
 const closeBtn = document.querySelector('.closebtn');
 const closeBtn1 = document.querySelector('.closebtn1');
 const closeBtn2 = document.querySelector('.closebtn2');
 const closeBtn3 = document.querySelector('.closebtn3');
 const webdevelopment = document.querySelector('.webdevelopment');
 const graphics = document.querySelector('.graphics');
 const cyber = document.querySelector('.cyber');
 const devBtn = document.querySelector('.dev-btn');
 const grpBtn = document.querySelector('.grp-btn');
 const cyberBtn = document.querySelector('.cyber-btn');
 

 aboutRead.onclick = () => {
  popAboutMe.classList.add('active');
  container.classList.add('active');
  document.querySelector('title').innerText = 'Portfolio | About Me';
  
  console.log('Ok');
 };

closeBtn.addEventListener('click', function (e) {
  popAboutMe.classList.remove('active');
  container.classList.remove('active');
  webdevelopment.classList.remove('active');
  console.log('Ok');
  document.querySelector('title').innerHTML = 'Profolio Website';

  
});

devBtn.addEventListener('click', function (e) {
  webdevelopment.classList.add('active');
  container.classList.add('active');

});


grpBtn.addEventListener('click', function (e) {
  graphics.classList.add('active');
  container.classList.add('active');

});


cyberBtn.addEventListener('click', function (e) {
  cyber.classList.add('active');
  container.classList.add('active');

});

closeBtn1.addEventListener('click', function (e) {
  webdevelopment.classList.remove('active');
  container.classList.remove('active');
  console.log('Ok');
  
});

closeBtn2.addEventListener('click', function (e) {
  graphics.classList.remove('active');
  container.classList.remove('active');
  console.log('Ok');
  
});


closeBtn3.addEventListener('click', function (e) {
  cyber.classList.remove('active');
  container.classList.remove('active');
  console.log('Ok');
  
});


// /*=======================Scroll Reveal================*/
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img, .btn,', { origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, ', { origin: 'right'});

// ===================Swiper=======================
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    centeredSlides: true,
    slidesPerView:1,
    loop:true,
    grapCursor:true,
    autoplay: {
    delay: 3500,
       disableOnInteraction: true,
     }, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    dynamicBullets:true,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  