//Login HEADER
// const identidadeTexto = document.getElementById("search-form");
// const identidadeSenha = document.getElementById("search-password");
// const identidadeSubmit = document.getElementById("search-button1");
// const listaUsuarios = document.getElementById("lista-users");

// const usuarios = [];

// function login() {
//   alert("Clique novamente no botão ENTRAR");
//   identidadeSubmit.onclick = () => {
//     if ((identidadeTexto.value === "") | (usuarios == identidadeTexto.value)) {
//       alert("Campo vazio, necessário preencher o usuário e senha");
//     } else {
//       usuarios.push(identidadeTexto.value);
//       localStorage.setItem(usuarios, identidadeTexto);
//       identidadeSenha.value = "";
//       identidadeTexto.value = "";
//       const emJson1 = JSON.stringify(usuarios);
//       let container = document.getElementById("lista-users");
//       container.innerHTML = `<li class="user-name">Bem vindo ao site, ${usuarios}!</li>`;
//     }
//   };
// }

//CARRINHO DE COMPRAS

const btnCarrinho = document.getElementById("enviar");
const btnCart = document.getElementById("search-button2");

btnCarrinho.onclick = () => {
  swal({
    icon: "info",
    title: "Adicionar ao carrinho?",
    buttons: {
      Confirmar: "Confirmar",
      Cancelar: "Cancelar",
    },
  });
};

const btnCarrinho2 = document.getElementById("enviar2");

btnCarrinho2.onclick = () => {
  swal({
    icon: "info",
    title: "Adicionar ao carrinho?",
    buttons: {
      Confirmar: "Confirmar",
      Cancelar: "Cancelar",
    },
  });
};

const btnCarrinho3 = document.getElementById("enviar3");

btnCarrinho3.onclick = () => {
  swal({
    icon: "info",
    title: "Adicionar ao carrinho?",
    buttons: {
      Confirmar: "Confirmar",
      Cancelar: "Cancelar",
    },
  });
};

const btnCarrinho4 = document.getElementById("enviar4");

btnCarrinho4.onclick = () => {
  swal({
    icon: "info",
    title: "Adicionar ao carrinho?",
    buttons: {
      Confirmar: "Confirmar",
      Cancelar: "Cancelar",
    },
  });
};

const btnCarrinho5 = document.getElementById("enviar5");

btnCarrinho5.onclick = () => {
  swal({
    icon: "info",
    title: "Adicionar ao carrinho?",
    buttons: {
      Confirmar: "Confirmar",
      Cancelar: "Cancelar",
    },
  });
};

const btnCarrinho6 = document.getElementById("enviar6");

btnCarrinho6.onclick = () => {
  swal({
    icon: "info",
    title: "Adicionar ao carrinho?",
    buttons: {
      Confirmar: "Confirmar",
      Cancelar: "Cancelar",
    },
  });
};

let modalKey = 0;
let qtdItens = 1;
let cart = [];

const adicionarNoCarrinho = () => {
  seleciona(".btn-outline-carrinho").addEventListener("click", () => {
    console.log("Adicionar no carrinho");

    abrirCarrinho();
    atualizarCarrinho();
  });
};

const abrirCarrinho = () => {
  console.log("Qtd de itens no carrinho " + cart.length);
  if (cart.length >= 0) {
    // mostrar o carrinho
    seleciona("aside").classList.add("show");
    seleciona("header").style.display = "flex"; // mostrar barra superior
  }
};
const fecharCarrinho = () => {
  // fechar o carrinho com o botão X no modo mobile
  seleciona(".menu-closer").addEventListener("click", () => {
    seleciona("aside").style.left = "100vw"; // usando 100vw ele ficara fora da tela
    seleciona("header").style.display = "flex";
  });
};
