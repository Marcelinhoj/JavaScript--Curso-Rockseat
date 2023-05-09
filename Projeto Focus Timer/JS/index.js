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

import { 
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay
 } from "./elements.js"


const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop

})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,  
  resetControls: controls.reset
 
})


buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function() {
 controls.pause()
 timer.hold()
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
  
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes) 
 
})