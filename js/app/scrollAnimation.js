const elements = document.querySelectorAll('[data-scrollAnimate]');

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

function scrollAnimation() {

    function animation(){
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

        elements.forEach(element => {
            if(windowTop > element.offsetTop){
                element.classList.add('animate');
            }else {
                element.classList.remove('animate');
            }
        });
    }

    if(elements.length) {
        window.addEventListener('scroll', debounce(function() {
            animation();
        }, 200));
    }

}

export default scrollAnimation;