import { showMenu, hideMenu } from './app/menuMobile.js';
import linksListeners from './app/smoothScroll.js';
import { inputValidate } from './app/formValidation.js';
import emailCheck from './app/mailcheck-config.js';
import scrollAnimation from './app/scrollAnimation.js';


window.onload = function() {
    showMenu();
    hideMenu();
    linksListeners();
    inputValidate();
    emailCheck();
    scrollAnimation();
}