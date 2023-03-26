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
        if (character.image === "") {
            //do nothing
        } else {
            const card =
                `
                 <div class="card_box"
                 style="text-align: center">
                     <br>
                     <h2 id="${character.name}">${character.name}</h2> 
                     <img class="card-image" src="${character.image}">
                     <div class="card-body">  
                         <p>Espèce : ${character.species}</p>
                         <p>Gendre : ${character.gender}</p>
                         <p>Ancestre : ${character.ancestry}</p>
                         <p>Maison : ${character.house}</p>
                         <p>Patronus : ${character.patronus}</p>
                         <p>Baguette : ${character.wand.core}</p>
                         <span>Acteur : ${character.actor}</span>
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
// http://localhost:63342/projet_sanoha_dataviz_api/personnages.html#Cedric%20Diggory

function jump_anchor() {
     const url = location.href;
     console.log(url);
     location.href = "#" + url.substring(66);
     console.log(location.href);
     history.replaceState(null,null,url);
    // get anchor from url:  http://localhost:63342/projet_sanoha_dataviz_api/personnages.html#Cedric%20Diggory
    //location.href = "#Ron%20Weasley"
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
