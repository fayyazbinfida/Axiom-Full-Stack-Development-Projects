
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All Functions
// Function to Show Error
function ShowError(input,message) {
  const FormControl = input.parentElement;
  FormControl.className = 'form-control error';
  const small = FormControl.querySelector('small');
  small.innerText = message;
}

//Function to Show Success
function showSuccess(input) {
    const FormControl = input.parentElement;
  FormControl.className = 'form-control success';
}

//Function to Check if Email is Valid
function isValidEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// This is an Event Listner for the form on submit
form.addEventListener('submit',function(e) {
    e.preventDefault();
    if (username.value === '') {
        ShowError(username,'Username is Required');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        ShowError(email,'Email is Required');
    } else if (!isValidEmail(email.value)) {
        ShowError (email, 'Email is Invalid');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        ShowError(password,'Password is Required');
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        ShowError(password2,'Password2 is Required');
    } else {
        showSuccess(password2);
    }
})