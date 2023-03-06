//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//Função callback
function handleTryClick(event) {
  event.preventDefault() //nao faça o padrão deste evento

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    
    document
        .querySelector(".screen2 h2")
        .innerText = `Acertou em ${xAttempts} tentativas.`
    
  }
  inputNumber.value = ""
  xAttempts++  
}
 function handleResetClick(){
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
 }

 function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
 }

