let Tela = document.querySelector('.tela');
let AC = document.querySelector('.ac');
let btnNumbers = document.querySelector('.teclado-botoes');
let btnOperation = document.querySelector('.operation');

let etapaAtual = 0;

let num = '';
let operacao = '';

function clean(){
    Tela.innerText = '';
    num = '';

    AC.classList.add('ativa');

    setTimeout(function(){
        AC.classList.remove('ativa');
    }, 100);
    
}

function button(n){
    etapaAtual = 0;
    num = n;
    
    if(num && etapaAtual === 0){
        Tela.innerText += num;
    }
 
}

function operation(op){
    
    
}

function updateDisplay(){
    
}