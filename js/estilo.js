document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");
  const erro = document.getElementById("mensagem-erro");
  const sucesso = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    
    if (nome === "" || email === "" || mensagem === "") {
      erro.textContent = "Por favor, preencha todos os campos obrigatórios.";
      erro.style.display = "block";
      sucesso.style.display = "none";
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      erro.textContent = "Digite um e-mail válido.";
      erro.style.display = "block";
      sucesso.style.display = "none";
      return;
    }

    erro.style.display = "none";
    sucesso.textContent = "Mensagem enviada com sucesso! Obrigado por entrar em contato.";
    sucesso.style.display = "block";

  
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("mensagem", mensagem);

    form.reset();
  });
});

const botaoToggle = document.getElementById("toggle-form");
const formContato = document.getElementById("form-contato");

botaoToggle.addEventListener("click", () => {
  if (formContato.style.display === "none") {
    formContato.style.display = "flex";
  } else {
    formContato.style.display = "none";
  }
});

