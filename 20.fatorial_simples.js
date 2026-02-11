let numFatorial = Number(prompt("Digite um número:"));
let fatorial = 1;
for (let i = numFatorial; i > 1; i--) {
  fatorial *= i;
}
console.log(`${numFatorial}! = ${fatorial}`);
