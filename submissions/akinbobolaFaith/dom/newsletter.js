let submitForm = document.querySelector('.newsletterSignup'),
    newsletter = document.getElementById('newsletter')
;

function newsletterValidation (event) {
    let newsletterRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    if (newsletter.value === '') {
        newsletter.nextElementSibling.innerHTML = "Please enetr your Email Address";
        event.preventDefault();
    } else if (!newsletter.value.match(newsletterRegex)) {
        newsletter.nextElementSibling.innerHTML = "Please enter a valid mail";
        event.preventDefault();
    } else{
        newsletter.innerHTML = "";
    }
}

function newsletterSignup(e) {
    newsletterValidation(e);
}

submitForm.addEventListener("submit", newsletterSignup);
