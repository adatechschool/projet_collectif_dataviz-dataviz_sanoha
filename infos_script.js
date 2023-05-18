//Partie 1 : pour la page index "Implémentation du Slide pour contenir toutes les images des personnages"

// Affecter à la constante "url_api" l'url de l'API "characters"
const url_api_characters = "https://hp-api.onrender.com/api/characters";
// Requête axios qui dit à l'url_api va chercher la donnée dans l'API
axios.get(url_api_characters)
    // Extraire les données et les mettre dans un fichier response
    .then((response) => {
        //Affichage de response
        console.log(response);
        //Affichage du contenu "data" de response
        console.log(response.data);
        // Affecter le contenu de "response.data" à la constante "liste_infos"
        const liste_infos = response.data;

        // *** Partie Slide

        // Récupérer le contenu de la classe div "swiper-wrapper" et l'affecter à la constante "container"
        const container = document.querySelector('.swiper-wrapper');
        // Récupérer le contenu de l'élément div qui a l'id "box_infos" et l'affecter à la constante "div_box_infos"
        const div_box_infos = document.getElementById('box_infos');
        // Utilisation d'une boucle "for" pour parcourir "liste_infos" (API)

        for (let i = 0; i < liste_infos.length; i++) {
            // Créer l'élément "div" et l'affecter à la constante "slide" afin de contenir un "swiper-slide" qui va
            // contenir une image à chaque itération et à la fin de la boucle, on aura toutes les images dans le "slide"
            const slide = document.createElement('div');
            // Ajouter au fur et à mesure les "swiper-slide" à l'élément "slide" (pour le défilement d'images)
            slide.classList.add('swiper-slide'); // <div class="swiper-slide">
            // Faire une condition pour toutes les images qui se trouvent dans l'API
            if (liste_infos[i].image) {
                //Créer l'élément "img" et l'affecter à la constante "img" afin de contenir une image à chaque itération
                const img = document.createElement('img');
                // Affecter à la source de l'élément "img" le contenu de l'image à l'index i qui se trouvent dans l'API
                // à chaque itération de la boucle "for"
                img.src = liste_infos[i].image;
                // Ajouter à l'élément "slide" la valeur contenue dans l'élément "img" à chaque itération
                slide.appendChild(img);
                // Ajouter à l'élément "container" la valeur contenue dans l'élément "slide" à chaque itération
                container.appendChild(slide);
            }
        }


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

                    // *** Partie Affichage infos

                    // Ajouter un événement de type click sur l'élément "img" où à chaque click sur une image des infos
                    // sur le personnage s'affichent
                    //img.addEventListener('click', event => {
                    // Vider le contenu HTML de l'élément "div_box_infos" grâce à innerHTML qui remplace son contenu par
                    // une chaine vide ""
                    div_box_infos.innerHTML = "";
                    // Créer le titre "h3" et l'affecter à la constante "title_name" pour afficher le nom du personnage
                    const title_name = document.createElement('h3');

                    // Créer le titre "h3" et l'affecter à la constante "title_alternate_name" pour afficher le pseudo
                    // du personnage
                    const title_alternate_names = document.createElement('h3');
                    // Créer le titre "h3" et l'affecter à la constante "title_house" pour afficher la maison
                    // du personnage
                    const title_house = document.createElement('h3');
                    // Affecter le contenu du nom du personnage dans "liste_infos" de l'API au contenu texte de
                    // l'élément "title_name" grâce à innerText à chaque itération
                    title_name.innerText = liste_infos[index].name;
                    // Parcourir les noms dans le tableau "alternate_names" dans "liste_infos" de l'API avec
                    // la boucle "for each"
                    liste_infos[index].alternate_names.forEach((name) => {
                        // Affecter le contenu du pseudo du personnage dans l'API au contenu texte de l'élément
                        // "title_alternate_name" grâce à innerText + un retour en ligne à chaque itération
                        title_alternate_names.innerText += "\n" + name;
                    })
                    // Affecter le contenu du nom de la maison du personnage dans l'API au contenu texte de l'élément
                    // "title_house" grâce à innerText à chaque itération
                    title_house.innerText = liste_infos[index].house;
                    // Ajouter au contenu de l'élément "div_box_infos" le contenu de "title_name"
                    //div_box_infos.appendChild(title_name);
                    // Ajouter au contenu de l'élément "div_box_infos" le contenu de "title_alternate_name"
                    //div_box_infos.appendChild(title_alternate_names);
                    // Ajouter au contenu de l'élément "div_box_infos" le contenu de "title_house"
                    //div_box_infos.appendChild(title_house);
             const house = liste_infos[index].house;
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


            // *** Partie réorientation vers page "personnages"

                    // Récupérer le contenu de l'élément "bouton_container" et l'affecter à la variable "bouton_infos"
                    let bouton_infos = document.getElementById('bouton_container');

                    // *** Partie réorientation vers la page personnages

                    const nom_personnage = `${liste_infos[index].name}`;
                    console.log(nom_personnage);
                    const ancre_personnage = nom_personnage.replaceAll(" ", "%20");
                    console.log(ancre_personnage);

                    //Affecter à l'élément "bouton_infos" une "div" qui a la classe "bouton" et qui contient
                    // à son centre un bouton qui nous réoriente vers la page "personnages"
                    bouton_infos.innerHTML =
                        // Les caractéristiques HTML et CSS de la constante "bouton_infos"
                        `
                         <div  id="bouton"
                         style="text-align: center">
                             <button class="bouton" onClick="window.location.href =
                             'personnages.html#${ancre_personnage}';">
                             Cliquez ici pour plus d'infos</button>
                         </div>
                        `;

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
                modalTitle.textContent = liste_infos[index].name;

                const names = document.getElementById('modal-names');
                //names.childNodes.forEach((child)=>{
                    //names.removeChild(child);
                //});
                names.innerHTML = "";
                liste_infos[index].alternate_names.forEach((name) => {
                    console.log(name);
                    console.log(modalContent);
                    console.log(names);
                    let p = document.createElement('p');
                    p.textContent = name;
                    names.appendChild(p);
                    //modalContent.textContent += "\n" + name;
                    });

                modalContent.textContent = liste_infos[index].house;
            });
        });




    })
    // Récupérer l'erreur
    .catch((error) => {
        //Afficher l'erreur
        console.error(error);
    });



