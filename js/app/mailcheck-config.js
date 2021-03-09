import { emailValidation } from './formValidation.js';

const domains = ['gmail.com', 'uol.com', 'outlook.com'];
const secondLevelDomains = ['hotmail'];
const topLevelDomains = ["com", "net", "org", "br"];

const emailInput = document.querySelector('#email');
const suggestionField = document.querySelector('.form__emailSuggestion');

const emailCheck = () => {
    emailInput.addEventListener('blur', function() {
        suggestionField.classList.remove('form__emailSuggestion--active');
        emailValidation(emailInput.value);
    
        Mailcheck.run({
            email: emailInput.value,
            domains: domains,                       
            topLevelDomains: topLevelDomains,       
            secondLevelDomains: secondLevelDomains,  
            suggested: function(suggestion) {
                suggestionField.classList.add('form__emailSuggestion--active');
                suggestionField.textContent= `Você quis dizer: ${suggestion.full}?`;
                suggestionField.setAttribute('tabindex', '0');
                suggestionField.setAttribute('role', 'alert');
                emailValidation(emailInput.value);
            }
          });
    });
};

export default emailCheck;