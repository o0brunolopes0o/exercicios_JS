function start(){
    let inputName = prompt('Digite seu nome').toLocaleUpperCase()

    let inputIdade = prompt('Digite a sua idade')

    let idade = parseInt(inputIdade)

    let maiorOuMenor
    if (idade >= 18) {
        maiorOuMenor = `maior de idade`
    }else{
        maiorOuMenor = `menor de idade`
    }

    let mensagemPersonalizada = ''
    if (inputName === 'BRUNO'){
        mensagemPersonalizada = 'Você é personagem da Matrix'
    }

    let saudacao = `Olá ${inputName}, você é ${maiorOuMenor}!`

    document.querySelector('#saudacao').innerHTML = saudacao
    document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada  
    
    console.log(inputName)
}




/* 

    document.getElementById("saudacao").textContent = `Seja bem vindo(A) ${inputName}`

*/