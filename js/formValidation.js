const inputRequire = document.querySelectorAll('[required]');

document.querySelector('#sendForm').addEventListener('click', (event) => {
    event.stopPropagation();

    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone'); // Não é orbigatório
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    nameValidation(name);
});

function nameValidation(name){
    const regExpName = /^([A-Z]{1}[a-z]+\s?){2,}$/;

    if(!regExpName.test(name) === true){
        inputRequire[0].setCustomValidity('Ops, campo inválido! Insira o seu nome completo :)');
    }else {
        alert('ok');
    }
}