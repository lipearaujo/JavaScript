function validate(){
    let inputName = document.getElementById('name').value;
    let inputPassword = document.getElementById('password').value;
    let inputMail = document.getElementById('mail').value;

    let nameRGEX = /[\s]/g;
    let passwordRGEX = /[A-z]{5}[$%!@*#]{6}[-]{2}/g;
    let mailRGEX = /@gmail.com/g;
    
    let nameResult = nameRGEX.test(inputName);
    let passwordResult = passwordRGEX.test(inputPassword);
    let mailResult = mailRGEX.test(inputMail);

    if(nameResult === true){
        alert('Please, insert a name without space');
    }

    if(passwordResult === false){
        alert('Please, insert a 5 letter password');
    }

    if(mailResult === false){
        alert('email invalido');
    }
}

