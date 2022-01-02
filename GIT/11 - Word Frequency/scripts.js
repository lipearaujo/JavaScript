let btnTranslate = document.querySelector('button');
let table = document.querySelector('table');
let divTable = document.querySelector('.table-box');

let cont = 0;

btnTranslate.addEventListener('click', function(){
    let textArea = document.getElementById('inputWord').value;
    let space = ' ';
    let arrayStrings = textArea.split(space);

    if(textArea === ''){
        alert('The text area cannot be empty !');
        location.reload();
    }else{
        divTable.style.display = 'flex';
    
        for (let i = 0; i < arrayStrings.length; i++) {
            let tableTr = document.createElement('tr');
            let tableTdRank = document.createElement('td');
            let tableTdCount = document.createElement('td');
            let tableTdWord = document.createElement('td');
            
            tableTdWord.innerHTML = arrayStrings[i];
            

    
            tableTdRank.innerHTML = i;
            tableTdCount.innerHTML = '';
                
            table.appendChild(tableTr);
            tableTr.appendChild(tableTdRank);
            tableTr.appendChild(tableTdCount);
            tableTr.appendChild(tableTdWord);
        }
    }

});

