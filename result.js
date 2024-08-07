document.addEventListener('DOMContentLoaded', function () {
    const data = JSON.parse(localStorage.getItem('testData'));
    let line1 = document.getElementsByClassName('line1');
    let line2 = document.getElementsByClassName('line2');
    let line3 = document.getElementsByClassName('line3');
    let line4 = document.getElementsByClassName('line4');

    if (data) {
        document.getElementById('q1-result').textContent = `Continuous Overpowered Motion, Running, and Jumping: ${data.q1}%`;
        
        document.getElementById('q2-result').textContent = `Your focus range while studying or listening to your family and friends: ${data.q2}%`;

        document.getElementById('q3-result').textContent = `Speed of getting bored of something: ${data.q3}%`;

        document.getElementById('q4-result').textContent = `Remembering random things at random times so often: ${data.q4}%`;

        showSlide(0);
        setWidth(data)
    }
});
function setWidth(data) {
    document.getElementsByClassName('line1')[0].style.width = `${data.q1}%`;
    document.getElementsByClassName('line2')[0].style.width = `${data.q2}%`;
    document.getElementsByClassName('line3')[0].style.width = `${data.q3}%`;
    document.getElementsByClassName('line4')[0].style.width = `${data.q4}%`;
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}
