const pokemon_number = document.querySelector('.pokemon_number');
const pokemon_name = document.querySelector('.pokemon_name');
const pokemon_image = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('#input_search');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let searchById = 1;

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if(APIResponse.status === 200) {

        const dataPokemon = await APIResponse.json();
        return dataPokemon;

    }

};

const renderPokemon = async (pokemon) => {
    pokemon_number.innerHTML = 'Loading...';
    pokemon_name.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data) {
        pokemon_image.style.display = 'block';
        pokemon_number.innerHTML = data.id
        pokemon_name.innerHTML = data.name;
        pokemon_image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    
        searchById = data.id;
        input.value = '';
    } else {
        pokemon_image.style.display = 'none';
        pokemon_number.innerHTML = '';
        pokemon_name.innerHTML = 'Not Found';
    }

};

form.addEventListener('submit', (event) => {
    
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    
});


btnPrev.addEventListener('click', () => {

    if(searchById > 1) {
        searchById = searchById - 1;
        renderPokemon(searchById);
    }

});

btnNext.addEventListener('click', () => {

    searchById = searchById + 1;
    renderPokemon(searchById);

});

renderPokemon(searchById);