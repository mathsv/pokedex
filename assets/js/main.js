const pokemonList = document.getElementById('pokemon-list')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5;
let offset = 0;

const maxRecords = 151; // Total of Pokemons of the first generation

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => 
            `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <div class="pokemonImg">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </div>
            </li>
            `
        ).join('')
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtRecordsNextPage = offset + limit

    if (qtRecordsNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
        return
    } else{
        loadPokemonItems(offset, limit)
    }
})