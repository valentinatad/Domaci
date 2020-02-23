

pokemon1 = {
    img:`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png">`,
    Ime: 'Blaziken',
    Vrsta: 'vatreni',
    Sposobnosti: ['bljesak', ' vatreni napad', ' okretan'],
    Karakteristike: {
        napad: 90,
        odbrana: 80,
        brzina: 80
    }
}
pokemon2 = {
    img:'<img src="https://gamepress.gg/pokemongo/sites/pokemongo/files/2017-08/286_0.png" id = "Breloom">',
    Ime: 'Breloom',
    Vrsta: 'travnati',
    Sposobnosti: ['boks udarci', ' vatreni napad', ' otrovni rep'],
    Karakteristike: {
        napad: 95,
        odbrana: 60,
        brzina: 90
    }
}
pokemon3 = {
    img:'<img src="https://images-na.ssl-images-amazon.com/images/I/61rf%2B5LQjRL._SX355_.jpg">',
    Ime: 'Combusken',
    Vrsta: 'vatreni',
    Sposobnosti: ['udari nogom', ' vatreni napad', ' kandze na krilima'],
    Karakteristike: {
        napad: 99,
        odbrana: 70,
        brzina: 100
    }
}
pokemon4 = {
    img: '<img src = "https://cdn.bulbagarden.net/upload/thumb/4/41/056Mankey.png/250px-056Mankey.png" id ="Manki">',
    Ime: 'Manki',
    Vrsta: 'borbeni',
    Sposobnosti: ['snaga majmuna', ' nos od svinje', ' snazne ruke'],
    Karakteristike: {
        napad: 70,
        odbrana: 50,
        brzina: 60
    }
}
pokemon5 = {
    img:'<img src="https://cdn.bulbagarden.net/upload/thumb/2/2d/062Poliwrath.png/250px-062Poliwrath.png">',
    Ime: 'Polivrat',
    Vrsta: 'vodeni',
    Sposobnosti: ['odlican plivac', ' vodeni kamen', ' snazne ruke'],
    Karakteristike: {
        napad: 80,
        odbrana: 90,
        brzina: 70
    }
}
let pokemoniNiz = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5]
let nizSposobnosti = [];
function SkupSposobnosti(pokemoniNiz) {
    for (let i = 0; i < pokemoniNiz.length; i++) {
        nizSposobnosti = nizSposobnosti.concat(pokemoniNiz[i].Sposobnosti)
    }

    return nizSposobnosti
}
let pokemoniSposobnosti = SkupSposobnosti(pokemoniNiz);
console.log(pokemoniSposobnosti)

let sposobnostiBezDuplikata = [];
for (let e of pokemoniSposobnosti) {
    if (!sposobnostiBezDuplikata.includes(e)) {
        sposobnostiBezDuplikata.push(e)
    }
}

console.log(sposobnostiBezDuplikata);

pokemoniNiz.sort((a, b) => {
    return a.Karakteristike.brzina - b.Karakteristike.brzina;
}

)
console.log(pokemoniNiz)

function pokemonSnagator(pokemoniNiz) {
    let pobednik = 0;
    for (i = 0; i < pokemoniNiz.length; i++)
        if (pokemoniNiz[i].Karakteristike.napad > pokemoniNiz[pobednik].Karakteristike.napad) {
            pobednik = i;
        }
    return pokemoniNiz[pobednik];
}
let najjaciPokemon = pokemonSnagator(pokemoniNiz);
console.log(najjaciPokemon);



let pokemoniTemplate = () => {
    app.innerHTML = "";
    for (let el of pokemoniNiz) {

        let div = document.createElement('div');
        div.className = "sviPokemoni2";
        let p = document.createElement('p');
        p.innerText = `Ime pokemona je ${el.Ime}.`+`\n`+ `Odlikuju ga ${el.Sposobnosti}.`;
        div.appendChild(p);
        div.innerHTML += el.img;
        app.appendChild(div);
    }
}
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', pokemoniTemplate)


let najjaciPokemonTemplate = () => {
    app.innerHTML = "";
    let p2 = document.createElement('p');
    p2.className = "najpokemon";
    p2.innerText = `Najsnazniji pokemon je ${najjaciPokemon.Ime}`+`\n`+`Njegove karakteristike su:`+`\n`+` ${najjaciPokemon.Sposobnosti}`;
    let div2 = document.createElement('div');
    div2.className = "sviPokemoni2";
    div2.appendChild(p2);
    div2.innerHTML += najjaciPokemon.img
    app.appendChild(div2)

}
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', najjaciPokemonTemplate)


