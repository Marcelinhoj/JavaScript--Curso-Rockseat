/*
  Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aun não passou n bimestre, motivar o aluno a dar o seu melhor na prova de recuperação.

  Em amos os casos, mostre uma mensagem com o nome do aluno e a nota
*/ 

let student = prompt('Digite o nome do(a) aluno(a)? ')
let n1 = prompt('Qual a nota da primeira prova? ')
let n2 = prompt('Qual a nota da segunda prova? ')
let n3 = prompt('Qual a nota da terceira prova? ')

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert("Parabens, " + student + "! Sua média foi de: " + average)

} else if (average < 3) {
  alert("Reprovado. Sua media foi de apenas: " + average)

} else  {
  alert(student + " estude para sua prova de recuperação! Sua media foi de: " + average)
}




