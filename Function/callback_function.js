// callback function

function sayMyname(name) {
  console.log('antes de executar a funcao callback')

  name ()

  console.log('depois de executar a callback')

}

sayMyname(
  () => {
    console.log('estou em uma callback')
  }
)