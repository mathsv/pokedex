
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`


function convertPokemonToHTML(pokemon) {
    const pokemonName = String(pokemon.name).charAt(0).toUpperCase() + String(pokemon.name).slice(1)

    return `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemonName}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemonName}">
                </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemon-list')
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHTML).join('')
})