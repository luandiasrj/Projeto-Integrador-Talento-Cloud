// --- Substitui o footer por links do Google Translate ---

window.addEventListener('DOMContentLoaded', (event) => {
    let translator = document.getElementById('translator');
    if (translator) {
        translator.innerHTML = `
            Translate:
            <a href="https://translate.google.com/translate?hl=pt&sl=pt&tl=es&u=${encodeURIComponent(window.location.href)}">🇪🇸</a> |
            <a href="https://translate.google.com/translate?hl=pt&sl=pt&tl=en&u=${encodeURIComponent(window.location.href)}">🇺🇸</a> |
            <a href="https://translate.google.com/translate?hl=pt&sl=pt&tl=de&u=${encodeURIComponent(window.location.href)}">🇩🇪</a>
        `;
    }
});
// --- Substitui o footer por links do Google Translate ---

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