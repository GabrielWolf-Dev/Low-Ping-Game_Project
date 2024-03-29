const inputRequire = document.querySelectorAll('[required]');
const inputForm = document.querySelectorAll('.boxInput__input');

const inputValidate = () => {
    document.querySelector('#sendForm').addEventListener('click', (event) => {
        event.stopPropagation();
    
        const name = document.querySelector('#name').value;
        const phone = document.querySelector('#phone').value;
        const email = document.querySelector('#email').value;
    
        nameValidation(name);
        phoneValidation(phone);
        emailValidation(email);
    });
};


function nameValidation(name){
    const regExpName = /^([A-Z]{1}[a-z]+\s?){2,}$/;

    if(!regExpName.test(name) === true){
        inputRequire[0].setCustomValidity('Field not valid! Please, insert your full name.');
        showErrorIcon(0);
    }else {
        showCheckIcon(0);
        inputRequire[0].setCustomValidity('');
    }
}

function phoneValidation(phone) {
    const regExpPhone = /^(\+\d{2})\s?(\(\d{2}\))\s?(\d{5}-\d{4})$/;

    if(!regExpPhone.test(phone) === true){
        inputRequire[1].setCustomValidity('Please insert your correctly phone number. Example: +44 (12) 76323-3321');
        showErrorIcon(1);
    }else {
        showCheckIcon(1);
        inputRequire[1].setCustomValidity('');
    }
}

function emailValidation(email){
    const regExpEmail = /^(\w+)@(gmail|hotmail|outlook|uol)(\.com|\.com\.br|\.net|\.org)$/;

    if(!regExpEmail.test(email) === true){
        inputRequire[2].setCustomValidity('Please, insert your correctly email. Only accept: hotmail, gmail, outlook or uol');
        showErrorIcon(2);
    }else {
        showCheckIcon(2);
        inputRequire[2].setCustomValidity('');
    }
}

function showErrorIcon(index) {
    inputForm[index].classList.add('boxInput__input--error');
    inputForm[index].classList.remove('boxInput__input--check');
}

function showCheckIcon(index) {
    inputForm[index].classList.remove('boxInput__input--error');
    inputForm[index].classList.add('boxInput__input--check');
}

export { emailValidation, inputValidate };