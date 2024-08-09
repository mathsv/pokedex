
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`


function convertPokemonToHTML(pokemon) {
    let pokemonNumber = pokemon.url.split('/')[6]
    let pokemonTypes = {}

    /*
    async function getPokemonTypes(pokemonNumber) {
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonNumber)
            const responseBody = await response.json()
            const types = responseBody.types.map((type) => type.type.name)
            
        }
        catch(error) {
            console.error(error)
        }
    }

    pokemonTypes = getPokemonTypes(pokemonNumber)
    */
   
    if (pokemonTypes.length === 1) {       
        return `
                <li class="pokemon">
                    <span class="number">#${pokemonNumber}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            <li class="type">${pokemonTypes[0]}</li>
                        </ol>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber}.svg" alt="${pokemon.name}">
                    </div>
                </li>
                `
    } else {
        return `
                <li class="pokemon">
                    <span class="number">#${pokemonNumber}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            <li class="type">${pokemonTypes[0]}</li>
                            <li class="type">${pokemonTypes[1]}</li>
                        </ol>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber}.svg" alt="${pokemon.name}">
                    </div>
                </li>
                `
    }
}

pokeApi.getPokemons().then((pokemonList) => {
    for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];
        //console.log(convertPokemonToHTML(pokemon));
        document.getElementById('pokemon-list').innerHTML += convertPokemonToHTML(pokemon);
    }
})