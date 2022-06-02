"use Strict"; //javascrip moderno On

const form = document.getElementById('form');
const inputs = document.querySelectorAll ('#form input');

const regularExpressions = {

    nombreAndApellido: /[a-zA-Z]{3,}/,
    email: /[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,3}/,

}

const validationForm = (e) =>{
    switch (e.target.name){
        case "name" :
            if(regularExpressions.nombreAndApellido.test(e.target.value)){
                document.getElementById('fielsetName').classList.remove('form__fielset-incorrecto')
                document.querySelector('#fielsetName .form__paragraph-valitacion').classList.remove('form__paragraph-valitacion--action')
                document.querySelector('#fielsetName box-icon').setAttribute('name','check-circle')
                document.getElementById('fielsetName').classList.add('form__fielset-correcto')
            }else{
                document.getElementById('fielsetName').classList.remove('form__fielset-correcto')
                document.querySelector('#fielsetName box-icon').setAttribute('name','x-circle')
                document.getElementById('fielsetName').classList.add('form__fielset-incorrecto')
                document.querySelector('#fielsetName .form__paragraph-valitacion').classList.add('form__paragraph-valitacion--action')
            }
        break;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validationForm );
    input.addEventListener('bluer', validationForm );
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
})