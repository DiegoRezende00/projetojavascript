//Login HEADER
const identidadeTexto = document.getElementById("search-form");
const identidadeSenha = document.getElementById("search-password");
const identidadeSubmit = document.getElementById("search-button1");
const listaUsuarios = document.getElementById("lista-users");

const usuarios = [];

function login() {
  identidadeSubmit.onclick = () => {
    usuarios.push(identidadeTexto.value);
    localStorage.setItem(usuarios, identidadeTexto);
    identidadeSenha.value = "";
    identidadeTexto.value = "";
    const emJson1 = JSON.stringify(usuarios);
    let container = document.getElementById("lista-users");
    container.innerHTML = `<li>Bem vindo ao site, ${usuarios}</li>`;
  };
}

function msg() {
  let teste = [];
  for (let i = 0; i < 1; i++) {
    nome = prompt("Insira o nome: ");
    idade = parseInt(prompt("Insira a idade: "));
    profissao = prompt("Insira a profissão: ");
    Toastify({
      text: `Bem vindo ao nosso site, ${nome}!`,
      duration: 3000,
    }).showToast();
    teste.push([nome, idade, profissao]);
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
  let nome2 = prompt("Insira o nome: ");
  let idade2 = parseInt(prompt("Insira a idade: "));
  let cpf = parseInt(prompt("Insira o cpf: "));
  users = { nome2, idade2, cpf };

  localStorage.setItem(users, nome2);
  const emJson = JSON.stringify(users);
  console.log(emJson);

  alert(`Bem vindo, ${nome2}!`);
  swal({
    icon: "warning",
    title: "Atenção",
    text: "Advertimos que a compra de bebida alcoólica é autorizada somente para pessoas maiores de 18 anos!",
    buttom: {
      Sim: "Ok",
    },
  });
  users.idade2 >= 18
    ? console.log("Pode comprar cerveja!")
    : alert("Não pode comprar cerveja!");

  let desestrurar = users.nome2;
  console.log(`Olá, ${desestrurar}! Bem vindo ao nosso site.`);

  let container = document.getElementById("lista-users");
  container.innerHTML = `<li>Bem vindo ao site, ${users.nome2}</li>`;
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

// const btnCarrinho = document.getElementById("enviar");

// btnCarrinho.onclick = () => {
//   swal({
//     icon: "info",
//     title: "Adicionar ao carrinho?",
//     buttons: {
//       Confirmar: "Confirmar",
//       Cancelar: "Cancelar",
//     },
//   });
// };

// const btnCarrinho2 = document.getElementById("enviar2");

// btnCarrinho2.onclick = () => {
//   swal({
//     icon: "info",
//     title: "Adicionar ao carrinho?",
//     buttons: {
//       Confirmar: "Confirmar",
//       Cancelar: "Cancelar",
//     },
//   });
// };

// const btnCarrinho3 = document.getElementById("enviar3");

// btnCarrinho3.onclick = () => {
//   swal({
//     icon: "info",
//     title: "Adicionar ao carrinho?",
//     buttons: {
//       Confirmar: "Confirmar",
//       Cancelar: "Cancelar",
//     },
//   });
// };

// const btnCarrinho4 = document.getElementById("enviar4");

// btnCarrinho4.onclick = () => {
//   swal({
//     icon: "info",
//     title: "Adicionar ao carrinho?",
//     buttons: {
//       Confirmar: "Confirmar",
//       Cancelar: "Cancelar",
//     },
//   });
// };

// const btnCarrinho5 = document.getElementById("enviar5");

// btnCarrinho5.onclick = () => {
//   swal({
//     icon: "info",
//     title: "Adicionar ao carrinho?",
//     buttons: {
//       Confirmar: "Confirmar",
//       Cancelar: "Cancelar",
//     },
//   });
// };

// const btnCarrinho6 = document.getElementById("enviar6");

// btnCarrinho6.onclick = () => {
//   swal({
//     icon: "info",
//     title: "Adicionar ao carrinho?",
//     buttons: {
//       Confirmar: "Confirmar",
//       Cancelar: "Cancelar",
//     },
//   });
// };

// APIFetch = fetch("http://servicodados.ibge.gov.br/api/v3/noticias/");

// async function GETPost() {
//   const response = await APIFetch;
//   console.log(await response.json());
// }

// GETPost();

async function GETPost() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  console.log(await response.json());
}
GETPost();

//Consumindo ENDPOINT de produtos
