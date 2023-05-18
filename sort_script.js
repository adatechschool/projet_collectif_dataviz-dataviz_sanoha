//import mySpellApi from "./sort_api";

axios.get('https://hp-api.onrender.com/api/spells')
    .then((response) =>{
        console.log(response.data);
        const results = response.data;

        const classContainer = document.querySelector(".container")// mettre point et le nom de la classe

        for (let i=0; i< results.length; i++) {
            const resultat = `
        <div class="spell">
        <p><strong>${results[i].name}</strong>:${results[i].description}</p>
       
        </div>`
            document.querySelector(".container").innerHTML += resultat;

        }
    });
