const loginDate = new Date();
const formattedDate = loginDate.toLocaleDateString('es-ES', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});
const formattedTime = loginDate.toLocaleTimeString('es-ES', {
  hour: '2-digit',
  minute: '2-digit',
});

document.getElementById('login-info-date').textContent = `${formattedDate} ${formattedTime}`;
document.getElementById('last-access').textContent = `${formattedDate} ${formattedTime}`;
document.getElementById('current-date').textContent = `${formattedDate} ${formattedTime}`;

let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
showSlides(slideIndex);

// Función para mostrar la diapositiva actual
function showSlides(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Función para mostrar la siguiente diapositiva
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
}

// Función para mostrar la diapositiva anterior
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlides(slideIndex);
}

// Eventos para los botones de control
document.querySelector('.next-slide').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

document.querySelector('.prev-slide').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Intervalo para cambiar las imágenes automáticamente cada 4 segundos
let slideInterval = setInterval(nextSlide, 4000);

// Función para reiniciar el intervalo cuando el usuario interactúa
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
}

