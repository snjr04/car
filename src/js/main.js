
let callBtn = document.querySelector('.call');
let overlay = document.querySelectorAll('.overlay');

let closeBtn = document.querySelectorAll('.overlay__close');

callBtn.addEventListener('click',()=>{
    overlay.style.display = 'block'
})

closeBtn.addEventListener('click',()=>{
    overlay.style.display = 'none'
})

overlay.addEventListener('click',(event)=>{
    if (event.target.classList.contains('overlay')) {
        overlay.style.display = 'none'
    }
})


console.log('hi')
console.log(1245313)