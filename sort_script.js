//import mySpellApi from "./sort_api";

axios.get('https://hp-api.onrender.com/api/spells')
.then((response) =>{
    console.log(response.data);
    const results = response.data;

    const classContainer = document.querySelector(".Container")// mettre point et le nom de la classe 
    
    for (let i=0; i< results.length; i++) {
        const resultat = `
        <div class="Toutie">
        <p><strong>${results[i].name}</strong>:${results[i].description}</p>
       
        </div>`
        document.querySelector(".Container").innerHTML += resultat;

    }
});

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

        
    
