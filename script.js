const submitbtn = document.getElementById('submitbtn')
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const passError = document.getElementById('passError')
const confirmpassError = document.getElementById('confirmpassError')

submitbtn.addEventListener('click', (e) => {

    e.preventDefault();

    if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword()) {

        alert("Form Submitted Successfully");
        window.location.href = "index.html";

    }

});

// Name ki liye 

function validateName() {

    let name = document.getElementById('name').value;

    if (name.length == 0) {

        nameError.innerHTML = "Name is required"
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }

    if (!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)) {

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

    if (email.length == 0) {

        emailError.innerHTML = "Email is required"
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

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

    if (password.length == 0) {

        passError.innerHTML = "Password is required"
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }


    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)) {

        passError.innerHTML = "Password should contain Minimum eight characters, at least one letter and one number"
        return false;

    }

    passError.innerHTML = ""
    passError.previousElementSibling.classList.add('fa-check');

    return true;


}

// confirm Password


function validateConfirmPassword() {
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;

    if (confirmpassword.length == 0) {

        confirmpassError.innerHTML = "Confirm Password is required"
        confirmpassError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    else if (confirmpassword != password) {

        confirmpassError.innerHTML = "Password should be same"
        confirmpassError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    confirmpassError.innerHTML = "Passsword Matched"
    confirmpassError.previousElementSibling.classList.add('fa-check');

    return true;
}


localStorage.setItem("Name1", FullName)
localStorage.setItem("Email1", Email)
localStorage.setItem("Password1", Password)
localStorage.setItem("Cpassword1", ConfirmPassword)

