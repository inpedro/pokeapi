const getpokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const gerarPokemon = () => Array(200).fill().map((_, index) =>
fetch(getpokemonUrl(index +1)).then(response => response.json()))

const generateHTML = pokemons => pokemons.reduce((accumulator, { name, id, types}) => {
        
    const elementTypes = types.map(typeInfo => typeInfo.type.name)
        accumulator += `
        <li class="card ${elementTypes[0]}" >
        <img class="card-image"  alt="${name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
        <h2 class="card-title">${id} - ${name}</h2>
        <p class="card-subtitle">${elementTypes.join(' | ')}</p>
        </li>
        `
        return accumulator
    }, '')

    const insertPokemonPage = pokemons => {
        const ul = document.querySelector('[data-js="pokedex"]')
                ul.innerHTML = pokemons
                console.log(ul)
    }
    
    const pokemonPromises = gerarPokemon()

    Promise.all(pokemonPromises)
    .then(generateHTML)
    .then(insertPokemonPage)


//function loadpokemon() {
//    let url = 'https://pokeapi.co/api/v2/pokemon/1';
//    fetch(url)
//    .then((res) => { return res.json()})
//    .then((dataPokemon) => {
//        console.log(dataPokemon)
//        document.getElementById('nome').innerHTML = dataPokemon['name']
//        document.getElementById('numero').innerHTML = dataPokemon['id']
//        let img = dataPokemon['sprites']['front_default']
//        document.getElementById('pic').setAttribute('src', img)
//        
//    })
//    .catch((erro) => {
//        console.log( "erro:" + erro)
//    });
//
//}
//
//document.getElementById('container').onclick = loadpokemon;