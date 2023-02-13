// throw

function sayMyname(name = ''){
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log(' depois do erro')
}


// try...catch 
try {
  sayMyname()

} catch (e) {
  console.log(e)
}

console.log(' após o try//catch')