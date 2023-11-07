document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Mostra o primeiro slide
    showSlide(currentSlide);

    // Configura um temporizador para passar automaticamente os slides a cada 3 segundos (3000 ms)
    setInterval(nextSlide, 3000);
});
