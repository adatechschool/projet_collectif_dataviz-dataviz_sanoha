// Partie 1 : Réalisation du Slide

// Affecter à la constante "url_api" l'url de l'API "characters"
const url_api_characters = "https://hp-api.onrender.com/api/characters";
// Requête axios qui dit à l'url_api va chercher la donnée dans l'API
axios.get(url_api_characters)
    // Extraire les données et les mettre dans un fichier response
    .then((response) => {
        //Affichage de response
        console.log(response);
        //Affichage du contenu de response
        console.log(response.data);
        // Récupérer le contenu de la classe div "swiper-wrapper" et l'affecter à la constante "container"
        const container = document.querySelector('.swiper-wrapper');
        // Affecter le contenu de "response.data" à la constante "liste_infos"
        const liste_infos = response.data;
        // Affecter le contenu de l'élément div qui a l'id "box_infos" à la constante "div_box_infos"
        const div_box_infos = document.getElementById('box_infos');
        // Utilisation d'une boucle for pour parcourir "liste_infos" (API)
        for (let i = 0; i < liste_infos.length; i++) {
            // Affecter à la constante "slide" le contenu de l'élément "div" créé préalabelement afin de contenir
            // l'élément div "swiper-slide" (contenaire des images)
            const slide = document.createElement('div');
            // Ajouter au fur et à mesure les "swiper-slide" à l'élément "slide" (pour le défilement d'images)
            slide.classList.add('swiper-slide'); // <div class="swiper-slide">
            // Faire une condition pour toutes les images qui se trouvent dans l'API
            if (liste_infos[i].image) {
                const img = document.createElement('img');
                img.src = liste_infos[i].image;

                slide.appendChild(img);
                container.appendChild(slide);

                img.addEventListener('click', event => {
                    div_box_infos.innerHTML = "";
                    const title_name = document.createElement('h3');
                    const title_alternate_names = document.createElement('h3');
                    const title_house = document.createElement('h3');
                    title_name.innerText = liste_infos[i].name;

                    liste_infos[i].alternate_names.forEach((name) => {
                        title_alternate_names.innerText += "\n" + name;
                    })

                    title_house.innerText = liste_infos[i].house;
                    div_box_infos.appendChild(title_name);
                    div_box_infos.appendChild(title_alternate_names);
                    div_box_infos.appendChild(title_house);

                    document.getElementById("cliquez-ici").addEventListener("click", event => {

                    })

                })
            }
        }
    })
    .catch((error) => {
        console.error(error);
    });

// le swiper
const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
})
