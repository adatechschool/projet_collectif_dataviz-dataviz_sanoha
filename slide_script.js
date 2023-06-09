//Partie 2 : pour la page index "Déclaration du swiper et de ses caractéristiques (propre à la bibliothèque "swiperjs")"

  //   // le swiper
  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
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
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      init: function () {
        // configuration des délais pour chaque diapositive
        this.slides.forEach((slide) => {
          slide.setAttribute("data-swiper-autoplay-delay", 2000); // délai moyen entre chaque diapositive
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

  //   // Ajouter un gestionnaire d'événement pour la souris

  swiper.el.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });
  swiper.el.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });

  const playButton = document.querySelector(".swiper-button-play");
  const pauseButton = document.querySelector(".swiper-button-pause");

  // Ajouter un écouteur d'événement sur le bouton play
  playButton.addEventListener("click", () => {
    swiper.autoplay.start();
  });

  // Ajouter un écouteur d'événement sur le bouton pause
  pauseButton.addEventListener("click", () => {
    swiper.autoplay.stop();
  });

  swiper.on("autoplayStop", () => {
    playButton.classList.remove("swiper-button-disabled");
  });

  swiper.on("autoplayStart", () => {
    playButton.classList.add("swiper-button-disabled");
  });

  //Modal
  const modalContainer = document.querySelector(".modal-container");
  const modalTitle = document.querySelector(".modal-title");
  const modalContent = document.querySelector(".modal-content");
  const closeModalBtn = document.querySelector(".modal-close-btn");

  // // Fonction pour ouvrir la modal

  // function openModal(title, content) {
  //   modalTitle.textContent = title;
  //   modalContent.textContent = content;
  //   modalContainer.style.display = "flex";
  // }

  function openModal(index) {
    const name = datas[index].name;
    const house = datas[index].house;
    modalTitle.innerHTML = name;
    modalContent.innerHTML = `<p>${house}</p>`;

    // Définir la couleur de fond en fonction de la valeur de "house"
    let color;
    switch (house) {
      case "Gryffindor":
        color = "red";
        break;
      case "Slytherin":
        color = "green";
        break;
      case "Hufflepuff":
        color = "yellow";
        break;
      case "Ravenclaw":
        color = "blue";
        break;
      default:
        color = "gray";
    }
    changeModalColor(color); // Appeler la fonction pour changer la couleur de la modal

    // swiper.autoplay.stop(); // Pause le slider

    modalContainer.style.display = "flex";
  }

  function changeModalColor(color) {
    // Récupérer l'élément modal
    const modal = document.querySelector(".modal");

    // Changer la couleur de fond de l'élément modal
    modal.style.backgroundColor = color;
  }

  // Fonction pour fermer la modal
  function closeModal() {
    modalContainer.style.display = "none";
  }

  // // Écouteur d'événement pour ouvrir la modal

  // document.querySelectorAll(".swiper-slide").forEach((slide, index) => {
  //   slide.addEventListener("click", () => {
  //     openModal(datas[index].name, datas[index].house);
  //   });
  // });

  document.querySelectorAll(".swiper-slide").forEach((slide, index) => {
    slide.addEventListener("click", () => {
      openModal(index);
    });
  });

  // // Écouteur d'événement pour fermer la modal
  closeModalBtn.addEventListener("click", closeModal);
  // Ajouter un écouteur d'événement pour détecter lorsque la souris quitte la zone du swiper
  swiper.el.addEventListener("mouseleave", () => {
    closeModal();
  });

  // Update modal content based on clicked slide
  document.querySelectorAll(".swiper-slide").forEach((slide, index) => {
    slide.addEventListener("click", () => {
      modalTitle.textContent = datas[index].name;
      modalContent.textContent = datas[index].house;
    });
  });

