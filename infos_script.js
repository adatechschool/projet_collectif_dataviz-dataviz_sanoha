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

                // *** Partie Affichage infos

                // Ajouter un événement de type click sur l'élément "img" où à chaque click sur une image des infos
                // sur le personnage s'affichent
                img.addEventListener('click', event => {
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
                    title_name.innerText = liste_infos[i].name;
                    // Parcourir les noms dans le tableau "alternate_names" dans "liste_infos" de l'API avec
                    // la boucle "for each"
                    liste_infos[i].alternate_names.forEach((name) => {
                        // Affecter le contenu du pseudo du personnage dans l'API au contenu texte de l'élément
                        // "title_alternate_name" grâce à innerText + un retour en ligne à chaque itération
                        title_alternate_names.innerText += "\n" + name;
                    })
                    // Affecter le contenu du nom de la maison du personnage dans l'API au contenu texte de l'élément
                    // "title_house" grâce à innerText à chaque itération
                    title_house.innerText = liste_infos[i].house;
                    // Ajouter au contenu de l'élément "div_box_infos" le contenu de "title_name"
                    div_box_infos.appendChild(title_name);
                    // Ajouter au contenu de l'élément "div_box_infos" le contenu de "title_alternate_name"
                    div_box_infos.appendChild(title_alternate_names);
                    // Ajouter au contenu de l'élément "div_box_infos" le contenu de "title_house"
                    div_box_infos.appendChild(title_house);

                    // *** Partie réorientation vers page "personnages"

                    // Récupérer le contenu de l'élément "bouton_container" et l'affecter à la variable "bouton_infos"
                    let bouton_infos = document.getElementById('bouton_container');

                    // *** Partie réorientation vers la page personnages

                    const nom_personnage = `${liste_infos[i].name}`;
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
                })
            }
        }
    })
    // Récupérer l'erreur
    .catch((error) => {
        //Afficher l'erreur
        console.error(error);
    });



