let ball = document.querySelectorAll('div.ball');
let len = ball.length;

function on(){
   
    for(let i=0; i<ball.length; i++){
        switch(i){
            case 0: ball[i].classList.add('red');
                break;
            case 1: ball[i].classList.add('green');
                break;
            case 2: ball[i].classList.add('blue');
                break;
            case 3: ball[i].classList.add('yellow');
                break;
            case 4: ball[i].classList.add('red');
                break;
            case 5: ball[i].classList.add('green');
                break;
            case 6: ball[i].classList.add('blue');
                break;
            case 7: ball[i].classList.add('yellow');
                break;
            
            default: '';
        }

        if(i % 2 === 0){
            setTimeout(function(){
                ball[i].classList.add('pisca');
            }, 100);  
        }else {
            setTimeout(function(){
                ball[i].classList.add('pisca');
            }, 700);     
        }
    }

}

function off(){
    for(let i=0; i<ball.length; i++){
        ball[i].classList.remove('pisca');
        ball[i].classList.remove('red');
        ball[i].classList.remove('green');
        ball[i].classList.remove('blue');
        ball[i].classList.remove('yellow');
    }
}

function run(){
    let input = document.getElementById('number').value;
    for(let i=0; i<len; i++){
        ball[i].style.animationDuration = input + "s";
    }
    
}