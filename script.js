const submitbtn = document.getElementById('submitbtn')
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const passError = document.getElementById('passError')
const confirmpassError = document.getElementById('confirmpassError')

submitbtn.addEventListener('click', (e) => {

    e.preventDefault();

    if (validateName()&& validateEmail() && validatePassword() && validateConfirmPassword()) {

        alert("Form Submitted Successfully")

    }

});

// Name ki liye 

function validateName() {

    let name = document.getElementById('name').value;

    if(name.length == 0){

       nameError.innerHTML = "Name is required"   
       nameError.previousElementSibling.classList.add('fa-xmark');
       return false;

    }

    if(!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)){

nameError.innerHTML = "Write full Name"
return false; 

    }

nameError.innerHTML = ""
nameError.previousElementSibling.classList.add('fa-check');

return true;

}

// Email ke liye


function validateEmail() {

    let email = document.getElementById('email').value;

    if(email.length == 0){

       emailError.innerHTML = "Email is required"   
       emailError.previousElementSibling.classList.add('fa-xmark');
       return false;

    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){

emailError.innerHTML = "Enter valid email"
return false; 

    }

emailError.innerHTML = ""
emailError.previousElementSibling.classList.add('fa-check');

return true;

}

// password ke liye



function validatePassword() {

    let password = document.getElementById('password').value;

    if(password.length == 0){

       passError.innerHTML = "Password is required"   
       passError.previousElementSibling.classList.add('fa-xmark');
       return false;

    }

    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){

passError.innerHTML = "Password should contain 1 uppercase, 1 lowercase, 1 digit"
return false; 

    }

passError.innerHTML = ""
passError.previousElementSibling.classList.add('fa-check');

return true;

}

// confirm Password


function validateConfirmPassword(){

let confirmpassword = document.getElementById('confirmpassword').value;

if (confirmpassword.length == 0){

confirmpassError.innerHTML = "Confirm Password is required"
confirmpassError.previousElementSibling.classList.add('fa-xmark');
return false;
}

if (!confirmpassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){

confirmpassError.innerHTML = " Password is Wrong";
return false;

}

confirmpassError.innerHTML = ""
confirmpassError.previousElementSibling.classList.add('fa-ckeck')

return true;

}


