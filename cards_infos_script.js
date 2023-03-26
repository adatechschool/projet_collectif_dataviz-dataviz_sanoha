// Partie 2 : Implémentation du card de chaque personnage

// Affecter à la constante "url_api" l'url de l'API "characters"
const url_api_characters = "https://hp-api.onrender.com/api/characters";
// Requête axios qui dit à l'url_api va chercher la donnée dans l'API
fetch(url_api_characters).then(response => {/// Aller chercher la donnée
    // extraire les données les mettre dans un fichier json
    return response.json(); // extrait mes données
}).then(datas => {
    console.log("DATAS", datas); //on manipule la donnée
    datas.forEach(character => { //boucle for each
        console.log("personnages", character.name);
        const card = `
            <div class="card"
            style="text-align: center">
            <img class="card-image" src="${character.image}">
                <div class="card-body">
                    <h2>Name : ${character.name}</h2>
                    <p>house : ${character.house}</p>
                    <span>Acteur : ${character.actor}</span>
                </div>
            </div>
            `;
        document.getElementById("personnages").innerHTML += card;
    });
})

// Affecter à la constante "url_api" l'url de l'API "characters"
const url_api_houses = "https://hp-api.onrender.com/api/characters/house/:house";
axios.get(url_api_houses)
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

// Récupérer le contenu de l'élément "div" à l'id "bouton" et l'affecter à la constante
//const bouton_vers_personnage = document.getElementById("bouton");
//bouton_vers_personnage.addEventListener("click", event => {

//bouton_infos.innerHTML = ""

//document.getElementById("bouton_container").innerHTML = bouton_infos;

//document.removeChild(document.getElementById('bouton'));