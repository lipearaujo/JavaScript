let totalImg = document.querySelectorAll('.box-item').length;
let currentImg = 0;

let boxWidth = document.querySelector('.box').clientWidth;
document.querySelector('.box-img').style.width = `calc(500px * ${totalImg})`;   

function prev(){
    currentImg--;
    if(currentImg < 0){
        currentImg = totalImg - 1;
    }

    update();
}

function next(){
    currentImg++;
    if(currentImg > (totalImg - 1)){
        currentImg = 0;
    }

    update();
}

function update(){
    let boxItem = document.querySelector('.box-item').clientWidth
    let newMargin = (currentImg * boxItem);
    document.querySelector('.box-img').style.marginLeft = `-${newMargin}px`;
}



setInterval(() => {
    next();
}, 5000);