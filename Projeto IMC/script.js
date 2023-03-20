// variaveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClosed = document.querySelector('.modal button.close')

const Modal = {
  open() {

  },
  close: function() {
    
  }
  
}


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
  
  modalMessage.innerText = message
  modalWrapper.classList.add('open')
}

modalBtnClosed.onclick = () => {
    modalWrapper.classList.remove('open')
 }
function IMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}


