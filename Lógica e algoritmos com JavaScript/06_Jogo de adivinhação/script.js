/*
  ** Jogo da adivinhação **

  Apresente uma mensagem ao usuário:
  "Adivinhe o número que estou pensando? Está ente 0 e 10"

  Crie um lógica para gerar um númeri digitado é  mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem: "Erro, tente novamente:"

  Caso o usuário acete onúmero, apresentar a mesangem: " Parabéns ! Você adivinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo númeto de tentativas
*/

let result = prompt("Adivinhe o número que estou pensando? Esta ente 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber ) {
  result = prompt(`Erro, tente novamente:`)
  xAttempts++
}
 if (xAttempts == 1){
  alert(`Parabéns! Você adivinhou o número em ${xAttempts} tentativa.`)
 } else{
  alert(`Parabéns! Você adivinhou o número em ${xAttempts} tentativas.`)

 }
