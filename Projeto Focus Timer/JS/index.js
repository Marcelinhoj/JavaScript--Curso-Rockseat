// Dom
// Document Object Model

// refatoração: mudar um código para deixá-lo mais entendível
// deixar o codigo mais performático
// SEM ALTERAR suas funcionalidades
// EcmaScript - 2015 ES6 Modules

// default import
import Controls from "./modules/controls.js"

//name import
import Timer from "./modules/timer.js" //importamos a função factory
import Sound from "./modules/sounds.js"
import Events from "./modules/events.js"
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    secondsDisplay,
    minutesDisplay,
} from "./modules/elements.js"

/*import { elements } from "./modules/elements.js"
const { 
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} = elements 
Esta é outra auternativa para usar os elementos aqui, para isso basta exportar criando um objeto também */

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({ //aqui criamos uma variavel que recebe a função importada e injetamos as dependencias.
    minutesDisplay, 
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

Events({ controls, timer, sound})