let inputNome = prompt('Digite seu nome').toLocaleUpperCase()

let inputIdade = prompt('Digite sua idade')

let idade = parseInt(inputIdade)

let maiorOuMenor

if (idade >= 18){
    maiorOuMenor = `maior de idade`
}else{
    maiorOuMenor = `menor de idade`
}

let mensagem

if(inputNome === "THOMAS ANDERSON"){
    document.write(`Olá ${inputNome}, seja bem vindo(a), você é ${maiorOuMenor}! Você é personagem do filme Matrix`)
}else{
    document.write(`Olá ${inputNome}, seja bem vindo(a), você é ${maiorOuMenor}!`)
}
