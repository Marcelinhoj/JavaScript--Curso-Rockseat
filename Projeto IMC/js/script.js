import { Modal } from './modal.js'

// variaveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



//3 maneiras de criar e atribuir função a um evento

//form.onsubmit = () => {}

//function handleSubmit () {
//}

form.onsubmit = event => {
  event.preventDefault() //pra pagina nao atualizar

  const weight = inputWeight.value
  const height = inputHeight.value


  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message
    Modal.open()
}


function IMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}