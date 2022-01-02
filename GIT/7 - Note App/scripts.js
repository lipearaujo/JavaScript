let divNotes = document.querySelector('.notes');
let divNotepadSingle = document.querySelector('.notepad-single');
let myStorage = localStorage;


function add(){

    let newNotepadSingle = document.createElement('div');
    newNotepadSingle.setAttribute('class', 'notepad-single');

    let newButton = document.createElement('button');
    newButton.setAttribute('class', 'delete');
    
    
    let newTextArea = document.createElement('textarea');
    newTextArea.setAttribute('id', 'text-notes');
    
    divNotes.appendChild(newNotepadSingle);
    newNotepadSingle.appendChild(newButton);
    newButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    newNotepadSingle.appendChild(newTextArea);

    let spanTime = document.createElement('span');
    spanTime.innerHTML = new Date();
    newNotepadSingle.appendChild(spanTime);

    newButton.onclick = function deleteItem(){
        divNotes.removeChild(newNotepadSingle);
    }

}


