// --- Constroi o footer ---
window.addEventListener("DOMContentLoaded", (event) => {
  // Seleciona o elemento pai do footer pára preenchimento
  let footerColumns = document.querySelector(".footer-columns");

  if (footerColumns) {
    // Primeira coluna
    let firstCol = document.createElement("div");
    firstCol.classList.add("footer-col");
    firstCol.innerHTML = `
            <p>Bem-vindo à Pousada Barra Grande no litoral sul da Bahia, em frente a uma das mais maravilhosas praias do Brasil: Taípu de Fora.<br></p>
            <div class="ct-topbar">
            <div class="container">
            <ul class="list-unstyled list-inline ct-topbar__list">
              <li class="ct-language">Translate 🌐
              <ul class="list-unstyled ct-language__dropdown">
                <li><a href="#" class="lang-select" data-lang="en">🇺🇸 English</a></li>
                <li><a href="#" class="lang-select" data-lang="es">🇪🇸 Español</a></li>
                <li><a href="#" class="lang-select" data-lang="de">🇩🇪 Deutsch</a></li>
                <li><a href="#" class="lang-select" data-lang="fr">🇫🇷 Francophone</a></li>
                <li><a href="#" class="lang-select" data-lang="ja">🇯🇵 日本</a></li>
              </ul>
              </li>
            </ul>
            </div>
          </div>       
        `;

    footerColumns.appendChild(firstCol);

    // Segunda coluna
    let secondCol = document.createElement("div");
    secondCol.classList.add("footer-col");
    secondCol.innerHTML = `
 <h3>Explore</h3>
 <ul>
 <li><a href="./">Início</a></li>
 <li><a href="reservas.html">Reservas</a></li>
 <li><a href="contato.html">Contato</a></li>
 <li><a href="cafe.html">Café da Manhã</a></li>
 <li><a href="acomodacoes.html">Acomodações</a></li> 
 </ul>
 `;
    footerColumns.appendChild(secondCol);

    // Terceira coluna
    let thirdCol = document.createElement("div");
    thirdCol.classList.add("footer-col");
    thirdCol.innerHTML = `
 <h3>Contatos</h3>
 <p>Taípu de Fora, Maraú State of Bahia, Brazil</p>
 <p>+55 (73) 99999-9999</p>
 <p>reservas@barragrande.com.br</p>
 <p>insta, X, Facebook, TripAdvisor</p>
<!-- Include the Google Translate script -->
<div id="google_translate_element"></div>
 `;
    footerColumns.appendChild(thirdCol);
  }

  // Parte de manipulação dos links de tradução da página

  var waitForElement = setInterval(function () {
    var element = document.querySelector(".ct-language__dropdown");
    if (element) {
      clearInterval(waitForElement);
      // Adiciona eventos de clique aos links
      addClickEvents();
    }
  }, 100);

  function addClickEvents() {
    // Seleciona todos os links da lista de idiomas
    var languageLinks = document.querySelectorAll(".ct-language__dropdown a");

    // Adiciona um evento de clique a cada link
    languageLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        var langCode = link.getAttribute("data-lang");
        changeLanguage(langCode);

        console.log("Selecionou:", langCode);
      });
    });
  }

  function changeLanguage(langCode) {
    // Encontrar o elemento de seleção de idioma
    var languageSelect = document.querySelector(".goog-te-combo");

    // Encontrar a opção correspondente ao idioma desejado
    var option = languageSelect.querySelector(
      'option[value="' + langCode + '"]'
    );

    if (option) {
      // Seleciona a opção e dispara o evento change
      option.selected = true;
      languageSelect.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      console.error("Opção de idioma não encontrada:", langCode);
    }
  }
});

// ----------------------------------------------------

// --- Carrossel de imagens ---
const images = [
  "WhatsApp Image 2021-02-08 at 11.28.22 (2) - Copia.jpeg",
  "WhatsApp Image 2021-02-08 at 11.28.23 - Copia.jpeg",
  "WhatsApp Image 2021-02-08 at 11.28.24 (1) - Copia.jpeg",
  "WhatsApp Image 2021-02-08 at 11.28.25 (1) - Copia.jpeg",
]; // Adicione os nomes dos arquivos de suas imagens aqui
let currentIndex = 0;

function showImage(index) {
  const container = document.getElementById("carousel-images");
  const existingImage = container.querySelector(".image-container");

  // Criar nova imagem
  const newImageContainer = document.createElement("div");
  newImageContainer.className = "image-container";
  newImageContainer.style.opacity = "0";
  newImageContainer.innerHTML = `<img src="img/cafe-da-manha/${
    images[index]
  }" alt="Imagem ${index + 1}">`;

  container.appendChild(newImageContainer);

  setTimeout(() => {
    newImageContainer.style.opacity = "1";
    if (existingImage) {
      existingImage.style.opacity = "0";
      setTimeout(() => existingImage.remove(), 1000); // Remova a imagem antiga depois da transição
    }
  }, 10);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", prevImage);
  nextBtn.addEventListener("click", nextImage);
  setInterval(nextImage, 5000); // Altere 5000 para o tempo desejado entre as transições (em milissegundos)

  showImage(currentIndex);
});

// --- Carrossel de imagens --

// --- Menu Mobile ---
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  mobileMenu.addEventListener("click", () => {
    if (navList.classList.contains("nav-open")) {
      navList.classList.remove("nav-open");
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      navList.classList.add("nav-open");
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  });

  // Adicionando o event listener para o evento de redimensionamento da janela
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navList.classList.remove("nav-open");
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  });

  // Adicionando event listener para o fechamento do menu ao clicar em um item do menu
  navList.addEventListener("click", () => {
    if (navList.classList.contains("nav-open")) {
      navList.classList.remove("nav-open");
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  });
});

// --- Menu Mobile ---

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

// ---------- Inicia a tradução do google ---------- //
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "pt-br",
      autoDisplay: "true",
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    },
    "google_translate_element"
  );
}
