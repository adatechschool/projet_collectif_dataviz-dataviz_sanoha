//import axios from "axios"
//import mySpellApi from "mySpellApi";

const parse = require('./sort_api');

function Content() {

    fetch(parse).then(response => {/// Aller chercher la donnée
        // extraire les données les mettre dans un fichier json
        return response.json(); // extrait mes données
    }).then(spells_list => {
        console.log("DATAS", spells_list); //on manipule la donnée
        spells_list.forEach((spell, i) => { // boucle for each
            console.log("personnages", spell.name);

            // axios.get(parse).then((response) => {
            //console.log(response.data);
            // const spells_list = response.data;
            //const classContainer = document.querySelector(".container")// mettre point et le nom de la classe
            //for (let i = 0; i < spells_list.length; i++) {

            const spells_quiz = `
        <div class="box_infos">
        <label for="spells-select">Choisis un spell dans la liste déroulante : </label>
        <selectct name ="spells-names" id="spells-select">
            <option value="${spells_list[i].name}">${spells_list[i].name}</option>
        </selectct>
        <br>
        <label for="spells-select">Est-ce que ton spell match avec une description dans la liste ?</label>
        <selectct name ="spells-names" id="spells-select">
            <option value="${spells_list[i].description}">${spells_list[i].description}</option>
        </selectct>
       
        </div>`
            document.querySelector(".container").innerHTML += spells_quiz;

        })
    });
}


export default Content;


// const name = document.createElement('h3');
// const sort = document.createElement('h4');

// name.innerText = results[i].name;
// sort.innerText = results[i].description;


//   classContainer.appendChild(name);
//   classContainer.appendChild(sort);


// results.forEach(data=> {
//
// const sort = document.createElement('h4');
// sort.innerText = data.description;

// classContainer.appendChild(name);
// classContainer.appendChild(sort);
//

        
    
