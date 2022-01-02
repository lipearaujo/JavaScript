let boxSingle = document.querySelectorAll('.box-img-single');
let btnPrev = document.querySelector('.left');
let btnNext = document.querySelector('.right');
let dots = document.querySelectorAll('.dots-single');

let currentImage = 0;
let currentDot = 0;
displayImage();

function displayImage() {

    for (let i = 0; i < boxSingle.length; i++) {
        boxSingle[i].style.display = 'none';    
    }

    for (let j = 0; j < dots.length; j++) {
        dots[j].classList.remove('active');  
    }

    boxSingle[currentImage].style.display = 'block';
    dots[currentDot].classList.add('active');
    
}

function next(){
    currentImage++;
    currentDot++
    if(currentImage > boxSingle.length - 1 && currentDot > boxSingle.length - 1){
        currentImage = 0
        currentDot = 0
    }

    displayImage();
}

btnNext.addEventListener('click', next);

function prev(){
    currentImage--;
    currentDot--;
    if(currentImage < 0 && currentDot < 0){
        currentImage = boxSingle.length - 1;
        currentDot = boxSingle.length - 1;
    }
    
    displayImage();
}

btnPrev.addEventListener('click', prev);


setInterval(()=>{
    next();
}, 2000)

