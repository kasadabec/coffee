document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('CoffeeImage');
    const slideIn = () => {
        image.style.left = '0';
    };
    const shakeImage = () => {
        image.classList.add('shake');
        image.addEventListener('animationend', () => {
            image.classList.remove('shake');
        }, { once: true });
    };
    slideIn();
    setTimeout(shakeImage, 1000); 
});