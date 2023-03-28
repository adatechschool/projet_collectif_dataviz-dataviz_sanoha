//Partie 2 : pour la page index "Déclaration du swiper et de ses caractéristiques (propre à la bibliothèque "swiperjs")"

  //   // le swiper
  const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
      delay: 2000, // délai moyen entre chaque diapositive
      disableOnInteraction: false, // empêcher l'autoplay d'être désactivé lors d'une interaction utilisateur
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    on: {

      init: function () {
        // configuration des délais pour chaque diapositive
        this.slides.forEach((slide) => {
          slide.setAttribute('data-swiper-autoplay-delay', 2000); // délai moyen entre chaque diapositive
        });
      },
      slideNextTransitionStart: function () {
        // ajouter un délai supplémentaire après la dernière diapositive avant de retourner à la première
        if (this.isEnd) {
          setTimeout(() => {
            this.slideTo(0, 4000); // délai plus lent pour la transition vers la première diapositive
          }, 2000); // délai supplémentaire en millisecondes
        }
      },
    },
  });

  // Ajouter un gestionnaire d'événement pour la souris
swiper.el.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});
swiper.el.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});

const playButton = document.querySelector('.swiper-button-play');
const pauseButton = document.querySelector('.swiper-button-pause');

// Ajouter un écouteur d'événement sur le bouton play
playButton.addEventListener('click', () => {
  swiper.autoplay.start();
});

// Ajouter un écouteur d'événement sur le bouton pause
pauseButton.addEventListener('click', () => {
  swiper.autoplay.stop();
});





