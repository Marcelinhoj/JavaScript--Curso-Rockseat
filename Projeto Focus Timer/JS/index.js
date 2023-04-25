// Dom
// Document Object Model

// refatoração: mudar um código para deixá-lo mais entendível
// deixar o codigo mais performático
// SEM ALTERAR suas funcionalidades
// EcmaScript - 2015 ES6 Modules

// default import
import Controls from "./controls.js"

//name import
import Timer from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const controls = Controls()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls: controls.reset
})


buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()


})

buttonPause.addEventListener('click', function() {
 controls.pause()
  clearTimeout (timerTimeOut)
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  
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
  let newMinutes = controls.getMinutes

  if (!newMinutes){
    timer.reset()
    return
  }

  minutes = newMinutes
  timer.updateDisplay(minutes, 0)

})