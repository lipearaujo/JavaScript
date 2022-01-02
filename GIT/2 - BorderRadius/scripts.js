let box = document.querySelector('.box');                   

let inputTopLeft = document.getElementById('top-left');
let inputTopRight = document.getElementById('top-right');
let inputBottomLeft = document.getElementById('bottom-left');
let inputBottomRight = document.getElementById('bottom-right');

let inputInfos = document.getElementById('input-infos');

function refresh(){
    let tl = inputTopLeft.value;
    let tr = inputTopRight.value;
    let bl = inputBottomLeft.value;
    let br = inputBottomRight.value;

    inputInfos.value = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px`;

    box.style.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
}

function copy(){
    inputInfos.select();
    navigator.clipboard.writeText(inputInfos.value);

    alert("Copied !");
}

