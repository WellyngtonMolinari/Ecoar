document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-images img');
    const progressBar = document.querySelector('.progress-bar');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 segundos

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
        resetProgressBar();
    }

    function resetProgressBar() {
        // Reinicia a largura da barra de progresso para 0%
        progressBar.style.transition = 'none';
        progressBar.style.width = '0';

        // Força a reflow (recalcula o estilo e o layout) para garantir que o reset aconteça imediatamente
        progressBar.offsetHeight; 

        // Agora inicia a transição para 100% ao longo de 5 segundos
        progressBar.style.transition = 'width 5s linear';
        progressBar.style.width = '100%';
    }

    // Inicializa a barra de progresso e o carrossel
    setInterval(showNextImage, intervalTime);
    resetProgressBar();
});
