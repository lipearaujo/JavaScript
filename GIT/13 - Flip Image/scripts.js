let img = document.querySelector('img');

function left(){
    img.style.transform = 'rotate(270deg)'; 
}

function right(){
    img.style.transform = 'rotate(90deg)'; 
}

function up(){
    img.style.transform = 'rotate(0deg)';
}

function down(){
    img.style.transform = 'rotate(180deg)';
}