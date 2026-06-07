 const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";



async function LoadHeaderImage() {

    try{
        
        const pokemons = ['mewtwo','pikachu','blaziken'];
        const random_pokemon = pokemons[Math.floor(Math.random() * pokemons.length)]

        const response = await fetch(BASE_URL + `${random_pokemon}`)
        const data = await response.json()
        const header_sprite = document.getElementById('header-sprite');
        const pokemon_images = data.sprites.front_default;
        
        header_sprite.src = pokemon_images;

        if (!response.ok){
            throw new Error('There was an error');
        }




    }
    catch (error){

        console.error(error);

    }
    
}

LoadHeaderImage()
 
 async function fetchData() {

    try{

        const input_pokemon = document.getElementById("input-pokemon").value.toLowerCase();
        const response = await fetch(BASE_URL  + `${input_pokemon}`); 
        const not_found = document.getElementById("Pokemon-not-found");
        
        if (!response.ok){
            throw new Error('There was an error');
        }

        if(response.status === 404){
            not_found.innerHTML = "Pokemon not found";
            return;
        }

        const pokemon_data = await response.json()
        const pokemon_profile = document.getElementById('pokemon-image');
        const pokemon_name = document.getElementById('pokemon-name');
        const pokemon_type = document.getElementById('pokemon-type')
        const name_of_pokemon = pokemon_data.species.name.toUpperCase();
        const pokemon_sprite = pokemon_data.sprites.front_default;
        const type_of_pokemon = pokemon_data.types.map(TypeInfo => TypeInfo.type.name).join(", ").toUpperCase();

        pokemon_profile.src = pokemon_sprite;
        pokemon_profile.style.display = "block";
        pokemon_name.textContent = name_of_pokemon;
        pokemon_type.textContent = type_of_pokemon;

    }
    catch(error){

        console.error(error);

    }
    
}