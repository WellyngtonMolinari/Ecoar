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
        progressBar.style.width = '0';
        // Utiliza um setTimeout para garantir que o CSS termine a transição atual antes de iniciar uma nova
        setTimeout(() => {
            progressBar.style.transition = 'none'; // Remove a transição para resetar imediatamente
            progressBar.style.width = '100%'; // Define a largura para 100%
            // Adiciona uma pequena espera e reinicia a transição
            setTimeout(() => {
                progressBar.style.transition = 'width 5s linear'; // Reaplica a transição
            }, 50); // Pequeno delay para garantir a aplicação do reset
        }, 10); // Pequeno delay para permitir que a largura vá para 0
    }

    // Inicializa a barra de progresso e o carrossel
    setInterval(showNextImage, intervalTime);
    resetProgressBar();
});
