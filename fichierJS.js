axios.get('https://hp-api.onrender.com/api/characters')
    .then((response) => {
        console.log(response);
        console.log(response.data);

        const container = document.querySelector('.swiper-wrapper');
        const liste_infos = response.data;
        const div_box_infos = document.getElementById('box_infos');

        for (let i = 0; i < liste_infos.length; i++) {
            const slide = document.createElement('div'); // <div>
            slide.classList.add('swiper-slide'); // <div class="swiper-slide">

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


axios.get('https://hp-api.onrender.com/api/characters/house/:house')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error);
    });

function ajout(liste_infos) {


    //const dictionnaire_infos = {};
    //const tableau_titres_infos = ['name', 'alternate_names', 'house'];
    //'species', 'gender', 'ancestry', 'patronus', 'wand_core' , ...
    //for (let i = 0; i < tableau_titres_infos.length; i++) {
    //dictionnaire_infos[tableau_titres_infos[i]] = document.createElement('h3');
    //console.log(dictionnaire_infos);


    //title_species.innerText = liste_infos[i].species;
    //title_gender.innerText = liste_infos[i].gender;


    //title_species.innerText = liste_infos[i].species;
    //title_gender.innerText = liste_infos[i].gender;
    //title_ancestry.innerText = liste_infos[i].ancestry;
    //title_house.innerText = liste_infos[i].house;
    //title_patronus.innerText = liste_infos[i].patronus;
    //title_wand.innerText = liste_infos[i].wand.core;

    //
    //div_box_infos.replaceChildren(title_species);
    //div_box_infos.replaceChildren(title_gender);
    //div_box_infos.replaceChildren(title_ancestry);
    //div_box_infos.replaceChildren(title_house);
    //div_box_infos.replaceChildren(title_patronus);
    //div_box_infos.replaceChildren(title_wand);

}