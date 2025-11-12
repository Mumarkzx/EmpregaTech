
const form = document.getElementById("formContato");
const mensagemRetorno = document.getElementById("mensagemRetorno");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

 
  if (nome === "" || email === "" || mensagem === "") {
    mensagemRetorno.textContent = "Por favor, preencha todos os campos!";
    mensagemRetorno.className = "mensagem-erro";
    return;
  }


  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    mensagemRetorno.textContent = "Digite um e-mail válido!";
    mensagemRetorno.className = "mensagem-erro";
    return;
  }

 
  mensagemRetorno.textContent = "Mensagem enviada com sucesso!";
  mensagemRetorno.className = "mensagem-sucesso";


  form.reset();
});
