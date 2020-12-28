const form = document.querySelector('#form');
const email = document.querySelector('#email');

//ER
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


document.addEventListener('DOMContentLoaded', () => {
    //Event Listeners
    email.addEventListener('blur', validateEmail);
});

function validateEmail(e) {
    e.preventDefault();

    if(e.target.type === 'email'){
        if(er.test(e.target.value)){
            const error = document.querySelector('.error');
            if(error){
                error.remove();
                e.target.classList.remove('error-email');
            }
        }else{
            e.target.classList.add('error-email');
            showError();
        }
    }
}


function showError() {
    const pError = document.createElement('p');
    const error = document.querySelector('.error');
    if(error){
        error.remove();
    }
    pError.classList.add('error');
    pError.textContent = 'Check your email pls';



    form.parentNode.appendChild(pError);
}