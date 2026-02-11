let peso = Number(prompt("Digite seu peso:"));
let altura = Number(prompt("Digite sua altura:"));
let imc = peso / (altura * altura);
console.log("IMC:", imc);
if (imc > 25) console.log("Acima do peso");

showResult("Seu IMC é: " + imc.toFixed(2));