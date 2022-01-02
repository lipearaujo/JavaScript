let input = document.getElementById('input');
let layout = document.querySelector('.layout');

function convert(){
    let textInput = input.value;
    let dec = 0;
    let exp = 0;
    //console.log(textInput);

    let letters = /[A-Z, a-z]/g;
    let numbers = /[2-9]/g;

    if(textInput.search(letters) !== -1 || textInput.search(numbers) !== -1 || textInput.length === 0){
        alert("Only 0 and 1 are valid... Try again !");
    }else{
        for(let i=textInput.length-1; i>=0; i--){
            dec = dec + parseInt(textInput[i] * Math.pow(2, exp));
            exp++;
        }

        let paragrafh = document.createElement("h1");
        paragrafh.innerHTML = textInput + "(2) is "+ dec+"(10)";
        layout.appendChild(paragrafh);
    }

    
    input.value = '';
    input.focus();
    
}