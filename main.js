const imageContainer = document.querySelector('.pics');
const images = document.querySelectorAll('.pics img');

// Clone images to make the scrolling seamless
images.forEach(image => {
    const clone = image.cloneNode(true);
    imageContainer.appendChild(clone);
});