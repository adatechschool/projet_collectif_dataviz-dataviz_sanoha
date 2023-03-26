

axios.get('https://hp-api.onrender.com/api/characters')
  .then((response) => {
    const container = document.querySelector('.swiper-wrapper');
    const datas = response.data;
    console.log(response.data)

    for (let i = 0; i < datas.length ; i++) {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      if (datas[i].image) {
        const img = document.createElement('img');
        img.src = datas[i].image;

        slide.appendChild(img);
        container.appendChild(slide);
    }
}


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
  
  })
