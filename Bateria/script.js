document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
    
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('ativa');

        setTimeout(function(){
            keyElement.classList.remove('ativa');
        }, 300);
    }

}

function tocar(){
    let inputText = document.getElementById('campoComposicao').value;
    
    if(inputText !== ''){
        let inputArray = inputText.split('');
        playComposition(inputArray);
    }
}

function playComposition(inputArray){
    let wait = 0;

    for(let inputItem of inputArray){
        setTimeout(()=>{
            playSound(`key${inputItem}`);
        }, wait);

        wait += 250;
    }
}

