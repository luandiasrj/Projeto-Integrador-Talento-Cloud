// --- Constroi o footer ---
window.addEventListener('DOMContentLoaded', (event) => {
    let footerColumns = document.querySelector('.footer-columns');

    if (footerColumns) {
        // Primeira coluna
        let firstCol = document.createElement('div');
        firstCol.classList.add('footer-col');
        firstCol.innerHTML = `
            <p>Bem-vindo à Pousada Barra Grande no litoral sul da Bahia, em frente a uma das mais maravilhosas praias do Brasil: Taípu de Fora.<br></p>
            <div class="translator-dropdown">
                <span>Translate 🌐</span>
                <div class="translator-dropdown-content">
                    <a href="https://translate.google.com/translate?hl=pt&sl=pt&tl=es&u=${encodeURIComponent(window.location.href)}">🇪🇸 Español</a>
                    <a href="https://translate.google.com/translate?hl=pt&sl=pt&tl=en&u=${encodeURIComponent(window.location.href)}">🇺🇸 English</a>
                    <a href="https://translate.google.com/translate?hl=pt&sl=pt&tl=de&u=${encodeURIComponent(window.location.href)}">🇩🇪 Deutsch</a>
                </div>
            </div>
        `;
        footerColumns.appendChild(firstCol);

        // Segunda coluna
        let secondCol = document.createElement('div');
        secondCol.classList.add('footer-col');
        secondCol.innerHTML = `
            <h3>Explore</h3>
            <ul>
                <li><a href="./">Início</a></li>
                <li><a href="reservas.html">Reservas</a></li>
                <li><a href="contato.html">Contato</a></li>
                <li><a href="cafe.html">Café da Manhã</a></li>
                <li><a href="acomodacoes.html">Acomodações</a></li>
                <li><a href="blog.html">Blog</a></li>
            </ul>
        `;
        footerColumns.appendChild(secondCol);

        // Terceira coluna
        let thirdCol = document.createElement('div');
        thirdCol.classList.add('footer-col');
        thirdCol.innerHTML = `
            <h3>Contatos</h3>
            <p>Taípu de Fora, Maraú State of Bahia, Brazil</p>
            <p>+55 (73) 99999-9999</p>
            <p>reservas@barragrande.com.br</p>
            <p>insta, X, Facebook, TripAdvisor</p>
        `;
        footerColumns.appendChild(thirdCol);
    }
});

// -------

// --- Carrossel de imagens ---
const images = ['WhatsApp Image 2021-02-08 at 11.28.22 (2) - Copia.jpeg', 'WhatsApp Image 2021-02-08 at 11.28.23 - Copia.jpeg', 'WhatsApp Image 2021-02-08 at 11.28.24 (1) - Copia.jpeg', 'WhatsApp Image 2021-02-08 at 11.28.25 (1) - Copia.jpeg'];  // Adicione os nomes dos arquivos de suas imagens aqui
let currentIndex = 0;

function showImage(index) {
    const container = document.getElementById('carousel-images');
    const existingImage = container.querySelector('.image-container');

    // Criar nova imagem
    const newImageContainer = document.createElement('div');
    newImageContainer.className = 'image-container';
    newImageContainer.style.opacity = '0';
    newImageContainer.innerHTML = `<img src="img/cafe-da-manha/${images[index]}" alt="Imagem ${index + 1}">`;

    container.appendChild(newImageContainer);

    setTimeout(() => {
        newImageContainer.style.opacity = '1';
        if (existingImage) {
            existingImage.style.opacity = '0';
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

document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    setInterval(nextImage, 5000);  // Altere 5000 para o tempo desejado entre as transições (em milissegundos)

    showImage(currentIndex);
});

// --- Carrossel de imagens --

// --- Menu Mobile ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    mobileMenu.addEventListener('click', () => {
        if (navList.classList.contains('nav-open')) {
            navList.classList.remove('nav-open');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            navList.classList.add('nav-open');
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        }
    });

    // Adicionando o event listener para o evento de redimensionamento da janela
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {  // Se a largura da janela for maior ou igual a 768px
            navList.classList.remove('nav-open');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
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


function gerenciarPopup(input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    });
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
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

const validarnome = valor => valor.length >= 4;
const validarEmail = valor => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

gerenciarPopup(nomeInput, nomeLabel);
gerenciarPopup(emailInput, emailLabel);
gerenciarPopup(telefoneInput, telefoneLabel);
gerenciarPopup(CheckInInput, CheckInLabel);
gerenciarPopup(CheckOutInput, CheckOutLabel);
gerenciarPopup(adultosInput, adultosLabel);

validarInput(nomeInput, nomeHelper, validarnome, "Seu nome precisa ter pelo menos 4 caracteres");
validarInput(emailInput, emailHelper, validarEmail, "Por favor, insira um email válido");

// ---------- VALIDAÇÃO FORMULÁRIO ---------- //