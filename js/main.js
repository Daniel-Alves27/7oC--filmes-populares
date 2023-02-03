/*let criar = document.createElement('div');

console.log(criar);

let addText = document.createTextNode("divisao criada")

console.log(addText)

criar.appendChild(addText)
*/
/*
const listaDeFilmes = document.createElement("section");
listaDeFilmes.className = "item__filmes";
listaDeFilmes.classList.add.container__filmes;
const containerFilmes = document.body.children[1].firstElementChild.appendChild(listaDeFilmes);

const itemFilmes = document.createElement("div");
document.body.children[1].firstElementChild.children[4].appendChild(itemFilmes);

const elementoFilmes = document.createElement("h2");
const addText = document.createTextNode("Tarzan");
elementoFilmes.appendChild(addText);
document.body.children[1].firstElementChild.children[4].firstElementChild.appendChild(elementoFilmes);

const sinopse = document.createElement("p");
const textSinopse = document.createTextNode("Tarzan ou Tarzã é um personagem de ficção criada pelo escritor estadunidense Edgar Rice Burroughs na revista pulp All-Story Magazine em 1912 e publicado em formato de livro em 1914")
sinopse.appendChild(textSinopse)
document.body.children[1].firstElementChild.children[4].appendChild(sinopse);
console.log(elementoFilmes);
*/

const container__filmes = document.querySelector(".container__filmes")

const movies = [
    {
        imagem:'https://i.imgur.com/NgzJjRO.jpg',
        titulo:'Vingadores Ultimato (2019)',
        nota: "9.2",
        sinopse:"Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
        favorito: "Favorito",
        star: "imagem",
        coracao: "imagem"
    },

    {
        imagem:'https://i.imgur.com/Y4L8ELQ.jpg',
        titulo:'Kimetsu Mugen Train',
        nota: "9.8",
        sinopse:"Depois que uma série de desaparecimentos misteriosos começam a atormentar um trem, as múltiplas tentativas do Corpo de Matadores de Demônios de remediar o problema se mostram infrutíferas. Para evitar mais baixas, o Pilar da Chama, Kyoujurou Rengoku, assume a responsabilidade de eliminar a ameaça.",
        favorito: "Favorito",
        star: "imagem",
        coracao: "imagem"
    },

    {
        imagem:'https://i.imgur.com/S9wVSYe.png',
        titulo:'Homem-Aranha no Aranhaverso',
        nota: "9.8",
        sinopse:"Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn, se torna o Homem-Aranha, inspirado no legado do já falecido Peter Parker.",
        favorito: "Favorito",
        star: "imagem",
        coracao: "imagem"
    },

    {
        imagem:'https://i.imgur.com/9734gDY.jpg',
        titulo:'Boku no Hero Academia',
        nota: "9.0",
        sinopse:"Boku no Hero Academia, também conhecido como My Hero Academia no ocidente, é uma série de mangá escrita e ilustrada por Kōhei Horikoshi.",
        favorito: "Favorito",
        star: "imagem",
        coracao: "imagem"
    }
];
window.onload = function() {
    movies.forEach(movie => renderMovie(movie));
}

function renderMovie(movie) {
    const {imagem,titulo,nota,sinopse,favorito} = movie;

    const listaDeFilmes = document.createElement("section");
    listaDeFilmes.className = "item__filmes";
    container__filmes.appendChild(listaDeFilmes);

    //_______________________________________________________

    const imgFilmes = document.createElement("img");
    imgFilmes.src = imagem;
    listaDeFilmes.appendChild(imgFilmes)

    //_______________________________________________________

    const div = document.createElement("div");
    listaDeFilmes.appendChild(div);
    const tituloFilmes = document.createElement("h2");
    const addTituloFilmes = document.createTextNode(titulo);
    tituloFilmes.appendChild(addTituloFilmes);
    div.appendChild(tituloFilmes);

    const notaDoFilme = document.createElement("span");
    const addnotaDoFilme = document.createTextNode(nota);
    notaDoFilme.appendChild(addnotaDoFilme);
    div.appendChild(notaDoFilme);

    const favoritarFilme = document.createElement("span");
    const addfavoritarFilme = document.createTextNode(favorito);
    favoritarFilme.appendChild(addfavoritarFilme);
    div.appendChild(favoritarFilme);

    //_______________________________________________________

    const sinopseFilmes = document.createElement("p");
    const addText = document.createTextNode(sinopse);
    sinopseFilmes.appendChild(addText)
    listaDeFilmes.appendChild(sinopseFilmes)    
    
 
    //console.log(notaDoFilme)
}
//renderMovie()