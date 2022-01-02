let questionId = document.querySelector('.question-number');
let title = document.querySelector('.question-title');
let answerText = document.querySelectorAll('.answer-text');
let answerSingle = document.querySelectorAll('.answer-single');
let btnNext = document.querySelector('.btnNext');
let btnStart = document.querySelector('.btnStart');

let id = 0;
let resp = '';
let acertos = 0;

function init(){
    let quests = questions[id];
    questionId.innerHTML = `Question ${quests.questionNumber}/${questions.length}`;
    title.innerHTML = quests.questionTitle;

    for (let i = 0; i < answerText.length; i++) {
        answerText[i].innerHTML = quests.answers[i];  
    }

    for(let i=0; i<answerSingle.length; i++){
    
        answerSingle[i].addEventListener('click', ()=>{
            answerSingle[i].style.color = 'green';
            resp = answerText[i].textContent;
            if(resp === quests.correct){
                acertos++;
                console.log(acertos);
            }
        });
    }
}

function resetStyles(){
    for(let i=0; i<answerSingle.length; i++){
        answerSingle[i].style.color = 'black';
    }
}

btnStart.addEventListener('click', ()=>{
    init();
});

btnNext.addEventListener('click', ()=>{
    if(id >= questions.length-1){
        alert('Quiz Finalizado !!! Número de acertos: '+acertos);
    }else{
        id++;
        init();
        resetStyles();
    }
});


