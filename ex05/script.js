let tabuada = parseInt(prompt('Digite o valor da tabuada'))

for (let contador = 0; contador < 10; contador++){
    mensagem = `${tabuada} X ${contador} = ${tabuada * contador} <br><br>`
    document.write(mensagem)
}