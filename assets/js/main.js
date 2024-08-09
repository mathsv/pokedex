
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHTML(pokemon) {
    return `
            <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${String(pokemon.name).charAt(0).toUpperCase() + String(pokemon.name).slice(1)}</span>

                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemon-list')
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHTML).join('')
})