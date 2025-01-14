const buttonsIgreja = document.querySelectorAll('.btn-igreja');

function initSlideshow(slideshow) {
    const slides = slideshow.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    slides.forEach(slide => slide.classList.add('hidden'));
    slides[currentSlideIndex].classList.remove('hidden');

    setInterval(() => {
        slides[currentSlideIndex].classList.add('hidden');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.remove('hidden');
    }, 7000);
}

buttonsIgreja.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o redirecionamento
        const url = button.getAttribute('href');

        // Redireciona e salva o estado da igreja selecionada
        localStorage.setItem('igrejaSelecionada', url);
        window.location.href = url;
    });
});

// Para cada página de igreja (dentro de cada HTML de igreja)
window.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.slideshow');
    if (slideshow) {
        slideshow.classList.remove('disabled');
        initSlideshow(slideshow);
    }
});
