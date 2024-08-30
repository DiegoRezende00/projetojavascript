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

//
