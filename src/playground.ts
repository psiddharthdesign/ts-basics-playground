fetch('https://pokeapi.co/api/v2/generation/1')
.then(response => response.json())
.then(data => {
        console.log(data);
        const app = document.querySelector('#app');
       
        console.log(data.pokemon_species)
        let listItems = ``;
        for(const pokemon of data.pokemon_species){
            listItems+=`<li>${pokemon.name}</li>`
        }
        const list = `<ol>${listItems}</ol>`
         if(app){
            app.innerHTML = list;
        }
    });
const a = 1;
console.log(a);


export {}