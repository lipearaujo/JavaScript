let listNames = document.querySelector('.list-names');
let infos = document.getElementById('infos');


for (let i = 0; i < people.length; i++) {

    let paragrafh = document.createElement('p');
    let nameSingle = document.createElement('div');
    nameSingle.classList.add('list-names-single');
    listNames.appendChild(nameSingle);
    nameSingle.appendChild(paragrafh);

    let paragrafAll = document.querySelectorAll('p')
    paragrafAll[i].innerHTML = people[i].name;

    nameSingle.addEventListener('click', function () {
        if (i === 0) {
            infos.innerHTML = `Name: ${people[i].name}
Address: ${people[i].street} - ${people[i].city}, ${people[i].state} 
Country: ${people[i].country}
Telephone: ${people[i].telephone} 
Birthday: ${people[i].birthday}
`}

        if (i === 1) {
            infos.innerHTML = `Name: ${people[i].name}
Address: ${people[i].street} - ${people[i].city}, ${people[i].state} 
Country: ${people[i].country}
Telephone: ${people[i].telephone} 
Birthday: ${people[i].birthday}
`}
        
if (i === 2) {
infos.innerHTML = `Name: ${people[i].name}
Address: ${people[i].street} - ${people[i].city}, ${people[i].state} 
Country: ${people[i].country}
Telephone: ${people[i].telephone} 
Birthday: ${people[i].birthday}
`}

    });
}





