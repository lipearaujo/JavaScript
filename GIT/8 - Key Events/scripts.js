let textArea = document.querySelector('#keysText');

function displayMessage(message) {
    textArea.innerHTML += message;
}

window.addEventListener('keydown', (e)=> {
    displayMessage(`Key = ${e.key} => | code = ${e.keyCode}(${e.code})` + '\n');

    /*if(e.key === 'Control' || e.key === 'Alt'){
        return;
    }*/

    if(e.ctrlKey){
        alert("CTRL key KeyDown: " + e.ctrlKey);
    }

    if(e.altKey){
        alert("ALT key KeyDown: " + e.altKey);
    }

    if(e.shiftKey){
        alert("SHIFT key KeyDown: " + e.shiftKey);
    }
});