
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
function CheckEmail (input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        ShowError(input, 'Please Provide a Valid Email');
    }
}

//New Function to Check if Field is Required
function ShowRequired(inputArray) {
    inputArray.forEach(function(input) {
        if(input.value === '') {
            ShowError(input, `${GetFieldId(input)} is Required`);
        } else {
            showSuccess(input);
        }
    });
}

// Functions to check if Passwords and Confirm Password is match
function CheckPasswordsMatch (input1, input2) {
    if (input1.value !== input2.value) {
        ShowError(input2, "Password Don't Match")
    }
}

//Function to Check Length of input field
function CheckLength (input, min, max) {
    if ( input.value.length < min) {
        ShowError(input, `${GetFieldId(input)} needs to be atleast ${min} Charactors`);
    } else if ( input.value.length > max) {
        ShowError(input, `${GetFieldId(input)} needs to be atleast ${max} Charactors`)
    } else {
        showSuccess(input);
    }
}


//Function to Get the Field id for 1st Latter in Upper Case
function GetFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// This is an Event Listner for the form on submit
form.addEventListener('submit',function(e) {
    e.preventDefault();
    ShowRequired([username,email,password,password2]);
    CheckLength(username,3,10);
    CheckLength(password,6,20);
    CheckEmail(email);
    CheckPasswordsMatch(password,password2);
})