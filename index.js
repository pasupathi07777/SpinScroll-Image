window.addEventListener('load', () => {
    const scrollingImages = document.querySelector('.scrolling-images');
    const images = scrollingImages.querySelectorAll('img');

 
    images.forEach(image => {
        const clone = image.cloneNode(true);
        scrollingImages.appendChild(clone);
    });

    let scrollAmount = 0;

    function scrollImages() {
        scrollAmount -= 4; // Adjust this value to change the speed
        if (Math.abs(scrollAmount) >= scrollingImages.scrollWidth / 2) {
            scrollAmount = 0;
        }
        scrollingImages.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scrollImages);
    }

    scrollImages();
});

