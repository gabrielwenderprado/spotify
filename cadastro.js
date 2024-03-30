const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValido();
    emailValido();
    passwordValidate();
    comparePassword();
});

function Error (index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '2px solid rgb(1, 247, 1)';
    spans[index].style.display = 'none';
}

function nameValido() {
    if(campos[0].value.length <3)
    {
        Error(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValido(){
    if(!emailRegex.test(campos[1].value))
    {
        Error(1);
    }
    else
    {
        removeError(1);
    }
}

function passwordValidate (){
    if(campos[2].value.length < 8)
    {
        Error(2);
    }
    else
    {
        removeError(2);
        comparePassword();
    }
}

function comparePassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8)
    {
        removeError(3);
    }
    else
    {
        Error(3);
    }
}