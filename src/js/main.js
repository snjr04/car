
let callBtn = document.querySelector('.call');
let overlay = document.querySelector('.overlay');

let closeBtn = document.querySelector('.overlay__close');

callBtn.onclick = function () {
    overlay.style.display = 'flex'
};

closeBtn.onclick = function () {
    overlay.style.display = 'none'
};

overlay.onclick = function (event) {
    if (event.target.classList.contains('overlay')) {
        overlay.style.display = 'none'
    }
};