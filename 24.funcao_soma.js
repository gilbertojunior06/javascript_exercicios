function somar(a, b) {
  return a + b;
}

let x = Number(prompt("Digite o primeiro número:"));
let y = Number(prompt("Digite o segundo número:"));

console.log("Resultado da soma:", somar(x, y));              // aparece no console
showResult("Resultado da soma: " + somar(x, y));             // aparece no HTML
