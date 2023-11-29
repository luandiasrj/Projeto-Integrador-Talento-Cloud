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
    setInterval(nextImage, 5000); // 5000 = 5 seg. Aqui voce pode alterar o tempo desejado entre as transições (em milissegundos).
  
    showImage(currentIndex);
  });
  
  // --- Carrossel de imagens --