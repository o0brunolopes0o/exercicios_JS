let listaAtores = [
    { 
      nome: 'Keanu Reeves',
      personagem: 'Neo',  
      filme: 'The Matrix', 
    },
  
    { 
      nome: 'David Prowse',
      personagem: 'Darth Vader', 
      filme: 'Star Wars Episódios IV-VI',  
    },  

    {  
      nome: 'Bruce Wayne',  
      personagem: 'Batman', 
      filme: 'Batman - O Início' 
    },
]

let htmlAtores = ''

for(let atores of listaAtores){
    htmlAtores += `
        <li>
        <h1>${atores.nome}</h1>
        <span>Insterpreta o personagem ${atores.personagem} no filme ${atores.filme}</span>
        </li>
        <br>
    `
}

document.querySelector('#listaFilmes').innerHTML = htmlAtores

/*
    for(let contador = 0; contador < listaAtores.length; contador++){
        console.log(listaAtores[contador].nome)
    }
*/ 