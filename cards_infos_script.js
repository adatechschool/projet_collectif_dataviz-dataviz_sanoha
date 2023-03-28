// Partie 3 : pour la page personnages "Implémentation du card de chaque personnage"

// Affecter à la constante "url_api" l'url de l'API "characters"
const url_api_characters = "https://hp-api.onrender.com/api/characters";
// Requête axios qui dit à l'url_api va chercher la donnée dans l'API
fetch(url_api_characters).then(response => {/// Aller chercher la donnée
    // extraire les données les mettre dans un fichier json
    return response.json(); // extrait mes données
}).then(datas => {
    console.log("DATAS", datas); //on manipule la donnée
    datas.forEach(character => { // boucle for each
        console.log("personnages", character.name);
        if (character.image === "") {
            //do nothing
        } else {
            const card =
                `
                 <div class="box">
                   <div class="card-box">
                     <h1 id="${character.name}">${character.name}</h1> 
                     <img class="card-image" src="${character.image}">
                     <div class="card-body">  
                         <h3>Espèce : ${character.species}</h3>
                         <h3>Gendre : ${character.gender}</h3>
                         <h3>Ancestre : ${character.ancestry}</h3>
                         <h3>Maison : ${character.house}</h3>
                         <h3>Patronus : ${character.patronus}</h3>
                         <h3>Baguette : ${character.wand.core}</h3>
                         <h2>Acteur : ${character.actor}</h2>
                     </div>
                   </div>
                 </div>
                 `;
            document.getElementById("personnages").innerHTML += card;
        }

        const nom_personnage = `${character.name}`;
        const anchor = nom_personnage.replaceAll(" ", "%20");
        console.log(anchor);

        let ancre_personnage =
            `
            <a href="#${anchor}"></a>
            `;
        document.getElementById("personnages").innerHTML += ancre_personnage;
    });

    jump_anchor();

})

// Fonction qui récupère l'url de la page courante :

function jump_anchor() {
     const url = location.href;
     console.log("URL :", url);
     console.log("index # : ", url.indexOf("#"));
     location.href = "#" + url.substring(url.indexOf("#")+1);
     console.log("Hashtag location : ", location.href);
     history.replaceState(null,null,url);
}

// Affecter à la constante "url_api" l'url de l'API "characters"
const url_api_houses = "https://hp-api.onrender.com/api/characters/house/:house";
axios.get(url_api_houses)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error);
    });
