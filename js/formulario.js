// ---------- VALIDAÇÃO FORMULÁRIO ---------- //

let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");
let telefoneInput = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let CheckInInput = document.getElementById("CheckIn");
let CheckInLabel = document.querySelector('label[for="CheckIn"]');
let CheckOutInput = document.getElementById("CheckOut");
let CheckOutLabel = document.querySelector('label[for="CheckOut"]');
let adultosInput = document.getElementById("adultos");
let adultosLabel = document.querySelector('label[for="adultos"]');
const formulario = document.querySelector("form");

function gerenciarPopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
    setTimeout(() => {
      label.classList.add("visible");
    }, 10); // Adiciona a classe 'visible' após um intervalo de 100 milissegundos (0.01 segundos)
  });

  input.addEventListener("blur", () => {
    label.classList.remove("visible");
    setTimeout(() => {
      label.classList.remove("required-popup");
    }, 10); // Remove a classe 'required-popup' após um intervalo de 100 milissegundos (0.01 segundos)
  });
}

function getLabelFor(inputId) {
  return document.querySelector(`label[for="${inputId}"]`);
}

function validarInput(input, helper, validacao, mensagemErro) {
  input.addEventListener("change", () => {
    const valor = input.value;
    if (validacao(valor)) {
      input.classList.remove("error");
      helper.classList.remove("visible");
      input.classList.add("correct");
    } else {
      input.classList.add("error");
      helper.innerText = mensagemErro;
      helper.classList.add("visible");
    }
  });
}

const validarnome = (valor) => valor.length >= 4;
const validarEmail = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

gerenciarPopup(nomeInput, nomeLabel);
gerenciarPopup(emailInput, emailLabel);
gerenciarPopup(telefoneInput, telefoneLabel);
gerenciarPopup(CheckInInput, CheckInLabel);
gerenciarPopup(CheckOutInput, CheckOutLabel);
gerenciarPopup(adultosInput, adultosLabel);

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  validarInput(
    nomeInput,
    nomeHelper,
    validarnome,
    "Seu nome precisa ter pelo menos 4 caracteres"
  );
  validarInput(
    emailInput,
    emailHelper,
    validarEmail,
    "Por favor, insira um email válido"
  );
});

// ---------- VALIDAÇÃO FORMULÁRIO ---------- //
