/*
const a = 10;
const b = 5;

console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + a * b);
console.log("Divisão: " + a / b);
console.log("Módulo: " + (a % b));


Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados. 

const a = 8;
const b = 7;

if (a > b) {
  console.log("numero maior e o 'a'");
} else {
  console.log("numero maior e o 'b'");
} 

Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados. 

const a = 8;
const b = 7;
const c = 10;

if (a > b && a > c) {
  console.log("numero maior e o 'a'");
} else if (b > a && b > c) {
  console.log("numero maior e o 'b'");
} else {
  console.log("numero maior e o 'c'");
}

Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário. 

const number = 8;

if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 

const anguloA = 5;
const anguloB = 10;
const anguloC = 15;

triangolo = anguloA + anguloB + anguloC;

if (triangolo === 30) {
  console.log(true);
} else {
  console.log(false);
}

Exercício 6
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.


const chessPiece = "cavalo";

switch (chessPiece.toLowerCase()) {
  case "rei":
    console.log("Rei-> Uma casa apenas para qualquer direção.");
    break;
  case "bispo":
    console.log("Bispo-> Diagonal.");
    break;
  case "rainha":
    console.log("Rainha-> Diagonal, horizontal e vertical.");
    break;
  case "cavalo":
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case "torre":
    console.log("Torre -> Horizontal e vertical.");
    break;
  case "peão":
    console.log(
      "Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas."
    );
    break;
  default:
    console.log("Erro, peça inválida!");
    break;



}


Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: 

const nota = 80;
if (nota < 0 || nota > 100) {
  console.log("erro ");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}
8 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . 

const a = 1;
const b = 4;
const c = 5;

let numero = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  numero = true;
}
console.log(numero);


Exercício 9
Escreva um programa que defina três números em constantes no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false .*/

const a = 2;
const b = 4;
const c = 6;

let isOdd = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  isOdd = true;
}
console.log(isOdd);
