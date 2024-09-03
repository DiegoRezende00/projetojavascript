const usuarios = [
  {
    login: "diego",
    pass: "diego",
  },
  {
    login: "admin",
    pass: "admin",
  },
  {
    login: "coder",
    pass: "coder",
  },
  {
    login: "teste",
    pass: "teste",
  },
];

let btnClicar = document.getElementById("btn-clicar");
btnClicar.addEventListener("click", function logar() {
  let pegaUsuario = document.getElementById("usuario").value;
  let pegaSenha = document.getElementById("senha").value;
  let validaLogin = false;

  for (let i in usuarios) {
    if (pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {
      validaLogin = true;
      break;
    } else {
      validaLogin = false;
    }
  }
  if (validaLogin == true) {
    alert("Autenticado com sucesso");
    location.href = "index.html";
  } else {
    alert("Usuário ou senha inválidos!");
  }
});
