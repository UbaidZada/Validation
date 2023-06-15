const submitbtn = document.getElementById('submitbtn')
const nameError = document.getElementById('nameError')


submitbtn.addEventListener('click', (e) => {

    e.preventDefault();

    if (validateName()&& validateEmail()) {

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

    let email = document.getElementById('name').value;

    if(email.length == 0){

       emailError.innerHTML = "Enter valid email"   
       emailError.previousElementSibling.classList.add('fa-xmark');
       return false;

    }

    if(!email.match(/^[a-zA-Z]*\s{1}[a-zA-Z]+$/)){

emailError.innerHTML = "Write full Name"
return false; 

    }

emailError.innerHTML = ""
emailError.previousElementSibling.classList.add('fa-check');

return true;

}



