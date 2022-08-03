const button = document.querySelector(".button");
const errimg = document.querySelectorAll(".errimg");
const inputbox = document.querySelectorAll(".inputbox");

button.addEventListener("click", onSubmit);

function onSubmit() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let errs = 0;


    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);


    if (firstName.value === "") {
        errs += 1;
        firstName.parentNode.classList.add("error");
        document.querySelector(".errfirst").classList.remove("hide");
        firstName.parentNode.querySelector(".errimg").classList.remove("hide");
    }
    if (lastName.value === "") {
        errs += 1;
        lastName.parentNode.classList.add("error");
        document.querySelector(".errlast").classList.remove("hide");
        lastName.parentNode.querySelector(".errimg").classList.remove("hide");
    }
    if (password.value === "") {
        errs += 1;
        password.parentNode.classList.add("error");
        document.querySelector(".errpass").classList.remove("hide");
        password.parentNode.querySelector(".errimg").classList.remove("hide");
    }
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value)) {
        console.log("good");
    } else {
        errs += 1;
        email.parentNode.classList.add("error");
        document.querySelector(".erremail").classList.remove("hide");
        email.parentNode.querySelector(".errimg").classList.remove("hide");
    }




    if (errs == 0) {
        location.reload();
    }
}

console.log(firstName.parentNode.classList);