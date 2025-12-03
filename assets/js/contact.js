document.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById("contact-form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    //Regex Patterns
    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Validation Funtion
    form.addEventListener("submit", function(e){
        let valid = true;

        if (!nameRegex.test(nameField.value.trim())){
            nameError.classList.remove("hidden");
            valid = false;
        } else{
            nameError.classList.add("hidden");
        }

        if (!emailRegex.test(emailField.value.trim())){
            emailError.classList.remove("hidden");
            valid = false;
        } else{
            emailError.classList.add("hidden");
        }

        if(messageField.value.trim().length <10){
            messageError.classList.remove("hidden");
            valid = false;
        } else{
            messageError.classList.add("hidden");
        }

        if(!valid){
            e.preventDefault();
        }
    });
});