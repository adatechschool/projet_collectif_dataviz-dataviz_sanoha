const mySpellApi = "sort_api.json"

axios.get(mySpellApi).then((response) => {/// Aller chercher la donnée
    // Extraire les données et les mettre dans un fichier response
    //Affichage de response
    console.log("Response :", response); //on manipule la donnée
    //Affichage du contenu "data" de response
    console.log("data :", response.data);
    // Affecter le contenu de "response.data" à la constante "liste_infos"
    const liste_sorts = response.data.spells_list;
    // extraire les données les mettre dans un fichier json

    //liste_sorts.forEach((spell) => { // boucle for each
    console.log("Spell : ", liste_sorts);

    const select_sort = document.getElementById("spells-select");
    const select_description = document.getElementById("description-select");

    // mettre point et le nom de la classe
    let reponse = true;
    for (let i = 0; i < liste_sorts.length; i++) {

        const spells_names = `
        <br>
        <option value="${liste_sorts[i].name}">${liste_sorts[i].name}</option>
        <br>
        `
        const spells_descriptions = `
        <br>
        <option style="max-width:50px;" value="${liste_sorts[i].description}">${liste_sorts[i].description}</option>
        <br>`
        select_sort.innerHTML += spells_names;
        select_description.innerHTML += spells_descriptions;

        document.getElementById("bouton").addEventListener('click', event => {

            const select_spell = document.getElementById("spells-select");
            const select_description = document.getElementById("description-select");

            const spell_value = select_spell.options[select_spell.selectedIndex].value;
            const description_value = select_description.options[select_description.selectedIndex].text;

            if (spell_value === liste_sorts[i].name && description_value === liste_sorts[i].description) {

                alert(`Bravo ! Le spell : ${spell_value} signifie : ${liste_sorts[i].traduction_fr}`);
                window.open("index.html", "Merci d'avoir jouer le jeu!");
                }
            else {
                alert('Dommage c\'est ncorrect ! Merci d\'avoir jouer le jeu!');
                window.open("index.html", "Merci d'avoir jouer le jeu!");

            }

                //const descriptions_sort = `
                // <br>
                //<h1 style="max-width:50px;"> Bravo ! Le spell : ${spell_value} signifie : ${liste_sorts[i].traduction_fr}</h1>
                // <br>`
                //    document.querySelector(".box-reponse").innerHTML += descriptions_sort;
                //   }
                //    else {
                //    const erreur = `
                //  <br>
                // <h1>Erreur ! Veuillez recommencer.")</h1>
                //  <br>`
                //  document.querySelector(".box-reponse").innerHTML += erreur;

        });
    }
});

