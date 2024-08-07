function msg() {
  let teste = [];
  for (let i = 0; i < 2; i++) {
    this.nome = prompt("Insira o nome: ");
    this.idade = parseInt(prompt("Insira a idade: "));
    this.work = prompt("Insira a profissão: ");
    alert(
      `Bem vindo, ${nome}! Você tem ${idade} anos e sua profissão é ${work}.`
    );
    teste.push([nome, idade, work]);
  }
  console.log(teste);
  const spread = {
    ...teste,
  };
  console.log(spread);
}

function calculo() {
  let valor1 = parseInt(document.getElementById("primeiro").value);
  let valor2 = parseInt(document.getElementById("segundo").value);
  document.getElementById("resultado").value = valor1 + valor2;
}

function cadastro() {
  let users = {
    nome2: "Teste",
    idade2: 1,
    cpf: 1,
  };
  for (let i = 0; i < 1; i++) {
    let nome2 = prompt("Insira o nome: ");
    let idade2 = parseInt(prompt("Insira a idade: "));
    let cpf = parseInt(prompt("Insira o cpf: "));
    users = { nome2, idade2, cpf };
    alert(`Bem vindo, ${nome2}!`);
  }
  users.idade2 >= 18
    ? alert("Pode comprar cerveja!")
    : alert("Não pode comprar cerveja!");
  console.log(users);
  let desestrurar = users.nome2;
  console.log(`Olá, ${desestrurar}! Bem vindo ao nosso site.`);
}

const texto = document.getElementById("field-text");
const save = document.getElementById("field-save");
const view = document.getElementById("field-view");
const clear = document.getElementById("field-clear");
const lista = document.getElementById("lista");

const armazenamento = [];

save.onclick = () => {
  armazenamento.push(texto.value);
  console.log(armazenamento);
  texto.value = "";
  localStorage.setItem("armazenamento", JSON.stringify(armazenamento));
};
view.onclick = () => {
  const armazenamento = JSON.parse(localStorage.getItem("armazenamento"));
  if (armazenamento) {
    armazenamento.forEach((texto) => {
      const itemLista = document.createElement("li");
      itemLista.innerText = texto;
      lista.appendChild(itemLista);
    });
  }
  console.log(lista);
};
clear.onclick = () => {
  localStorage.removeItem("armazenamento");
  lista.innerText = "";
  armazenamento.length = 0;
};

const btnCarrinho = document.getElementById("enviar");

btnCarrinho.onclick = () => {
  console.log("Botão está funcionando!");
};
