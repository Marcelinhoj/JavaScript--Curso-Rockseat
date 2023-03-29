// Dom
// Document Object Model

// refatoração: mudar um código para deixá-lo mais entendível
// deixar o codigo mais performático
// SEM ALTERAR suas funcionalidades

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes 
const minutesDisplay = document.querySelector('.minutes')
const secundsDisplay = document.querySelector('.secunds')

// Event-driven
// programação imperativa
// callback

function countdown() {
  setTimeout(function() {
    let secunds = Number(secundsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secundsDisplay.textContent = String(secunds -1).padStart(2, "0")   
    
    
    if (minutes <= 0) {
      buttonPlay.classList.remove('hide')
      buttonPause.classList.add('hide')
      buttonSet.classList.remove('hide')
      buttonStop.classList.add('hide')
      
      return
    }
    
    if ( secunds <= 0) {
      secunds = 60

      minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
    }

    secundsDisplay.textContent = String(secunds -1).padStart(2, "0")   

    
    countdown()
  }, 1000)
  
}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()


})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = String(minutes).padStart(2, "0")

})