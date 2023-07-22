
const contactForm = document.querySelector('.contact-form');

let firstname = document.getElementById ('firstname');
let lastname = document.getElementById ('lastname');
let tel = document.getElementById ('tel');
let email = document.getElementById ('email');
let message = document.getElementById ('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        firstname: firstname.value,
        lastname: lastname.value,
        tel: tel.value,
        email: email.value,
        message: message.value
    }
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email Sent');
            firstname.value = '';
            lastname.value = '';
            tel.value = '';
            email.value = '';
            message.value = '';
        } else {
            alert ('Something went wrong!');
        }
    }

    xhr.send(JSON.stringify(formData))
});