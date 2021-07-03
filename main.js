const form = document.getElementById("form");
const email = document.getElementById("email");
const errorElement = document.querySelector(".error");

const submit = document.getElementById("submit");

submit.addEventListener("click", validate);
function validate(e) {
    let messages = [];
    let emailAddress = email.value;
    let email_pattern =
        /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,3})?$/;
    if (email_pattern.test(emailAddress)) {
        email.style.borderColor = "green";
    } else {
        e.preventDefault();
        errorElement.style.display = "block";
    }
}
