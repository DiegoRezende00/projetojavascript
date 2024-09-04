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

// const btnCarrinho = document.getElementById("enviar");
// const btnCart = document.getElementById("search-button2");

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

//ITENS JSON
let itensJson = [
  {
    id: 1,
    name: "Iphone 12",
    img: "https://www.mastertronic.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max-cor-pacific-blue-1.webp.jpg",
    price: 2.999,
    description: "Celular ultratecnologico da APPLE",
  },
  {
    id: 2,
    name: "Iphone 13",
    img: "https://imgs.casasbahia.com.br/1562259830/1xg.jpg",
    price: 3.999,
    description: "Celular ultratecnologico da APPLE",
  },
  {
    id: 3,
    name: "Samsung S23",
    img: "https://samsungbrshop.vtexassets.com/arquivos/ids/219667-600-auto?v=638514816133800000&width=600&height=auto&aspect=true",
    price: 4.999,
    description: "Celular ultratecnologico da SAMSUNG",
  },
  {
    id: 4,
    name: "DELL INSPIRON",
    img: "https://a-static.mlcdn.com.br/800x560/notebook-dell-inspiron-15-3000-intel-core-i3-4gb-128gb-ssd-156-led-windows-10/magazineluiza/227755500/1639e4b40029f26aa17353c6a9005105.jpg",
    price: 6.999,
    description: "Notebook excelente para tarefas do cotidiano",
  },
  {
    id: 5,
    name: "Samsung book i5",
    img: "https://a-static.mlcdn.com.br/450x450/notebook-samsung-book-intel-core-i5-8gb-256gb-ssd-windows-11-156-full-hd/magazineluiza/234099300/de644079942148fab480114128c23f72.jpg",
    price: 7.999,
    description: "Notebook samsung ideal para jogar FPS",
  },
  {
    id: 6,
    name: "Lenovo ideapad",
    img: "https://images-americanas.b2w.io/produtos/01/00/img/4199005/9/4199005932_1GG.jpg",
    price: 9.999,
    description: "Notebook excelente para edição de videos",
  },
];

let produtos = [];
let endpoint = itensJson;
let elementoParaInserirProdutos = document.getElementById("produtos__lista");

console.log(endpoint);

function exibirProdutos(endpoint) {
  endpoint.forEach((produto) => {
    console.log(produto);
    elementoParaInserirProdutos.innerHTML += `
        <li class="produtos__item">
            <div class="produtos__content">
                <img src="${produto.img}">
                <div class="produtos__informacoes">
                    <h3>${produto.name}</h3>
                    <p>${produto.description}
                    </p>
                    <h4>R$ ${produto.price},00</h4>
                    <p>Frete GRÁTIS</p>
                    <button class="submit" id="submit-buy">Adicionar ao Carrinho</button>
                </div>
            </div>
        </li>
        `;
  });
}
exibirProdutos(endpoint);

const btnCarrinhoCompras = document.getElementById("submit-buy");

btnCarrinhoCompras.onclick = () => {
  swal({
    icon: "info",
    title: "Adicionar ao carrinho?",
    buttons: {
      Confirmar: "Confirmar",
      Cancelar: "Cancelar",
    },
  });
};
