let box = document.querySelector('.box');
let button = document.querySelector('button');
let chooseColor = document.getElementById('colorName');

let color = ['#000', '#32a852', '#a83232', '#3832a8'];
let num = 0;

function control(){

    if(chooseColor.value !== '' && button.textContent === 'Start'){
        color.unshift(chooseColor.value);
    }
    
    if(button.textContent === 'Start'){
        
        window.refreshIntervalId = setInterval(switchColors, 600);

        //box.classList.add('switchColor');
        button.innerText = 'Stop';
    }else{
        //box.classList.remove('switchColor');
        clearInterval(refreshIntervalId);
        box.style.backgroundColor = '#fff';
        button.innerText = 'Start';
    }
}

function switchColors(){
    box.style.backgroundColor = color[num];
    box.style.transition = "background-color 1s ease-out";

    if(num > color.length){
        num = 0;
    }else{
        num++;
    }   
}


