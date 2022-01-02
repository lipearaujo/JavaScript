const root = document.documentElement;
let inputLogin = document.getElementById('login');
let inputPassword = document.getElementById('password');
let cancelButton = document.getElementById('cancel');

let id = 'testuser';
let password = 'mypassword';


function validate(){
    if(inputLogin.value === ''){
        root.style.setProperty('--boxColor', '#f8fa93');
        inputLogin.classList.add('input-colors');
    }else{
        if(inputPassword.value === ''){
            root.style.setProperty('--boxColor', '#f8fa93');
            inputPassword.classList.add('input-colors');
        }else{
            if(inputLogin.value !== id){
                alert('Wrond User ID');
                root.style.setProperty('--boxColor', '#c76565');   
            }else{
                if(inputPassword.value !== password){
                    alert('Wrond Password');
                    root.style.setProperty('--boxColor', '#c76565');
                }else{
                    alert('Logged in as testuser!!!');
                    inputLogin.value = '';
                    inputPassword.value = '';
                    inputLogin.focus();
                    root.style.setProperty('--boxColor', '#fff');
                }
            }
        }
    }
}



function clear(){
    root.style.setProperty('--boxColor', '#fff');
    inputLogin.value = '';
    inputPassword.value = '';
}

cancelButton.addEventListener('click', clear);



