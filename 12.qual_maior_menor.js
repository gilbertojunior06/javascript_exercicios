let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));

if (a > b) {
  console.log("Maior:", a);                 
  showResult("Maior: " + a);                
} else if (b > a) {
  console.log("Maior:", b);                 
  showResult("Maior: " + b);               
} else {
  console.log("São iguais");                
  showResult("São iguais");                 
}
