// variaveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//3 maneiras de criar e atribuir função a um evento

//form.onsubmit = () => {}

//function handleSubmit () {
//}

form.onsubmit = function(event) {
  event.preventDefault() //pra pagina nao atualizar

  const weight = inputWeight.value
  const height = inputHeight.value

  console.log(weight, height)
}

function IMC (weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}


