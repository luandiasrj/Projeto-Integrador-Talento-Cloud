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
