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
        progressBar.style.width = '0';
        setTimeout(() => {
            progressBar.style.width = '100%';
        }, 10);
    }

    setInterval(showNextImage, intervalTime);
    resetProgressBar();
});
