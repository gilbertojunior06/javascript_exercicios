let qtd = Number(prompt("Quantos produtos deseja cadastrar?"));
let produtos = [];
for (let i = 0; i < qtd; i++) {
  produtos.push(prompt(`Digite o nome do produto ${i+1}:`));
}
console.log("Produtos cadastrados:", produtos);
showResult("Produtos cadastrados: " + produtos.join(", "));
