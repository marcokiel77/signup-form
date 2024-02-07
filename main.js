const signup = document.querySelector('.signup');
const newsletter = document.getElementById('newsletter');
const email = document.getElementById('email');

email.focus();

email.addEventListener('input', () => {
    validateEmail();
});

signup.addEventListener('submit', e => {
    e.preventDefault();

    if (validateEmail()) {
        newsletter.innerHTML = `
            <div class="thanks">
                <span class="icon">&check;</span>
                <h1 class="title">Thanks for<br>subscribing!</h1>
                <p class="text">A confirmation email has been sent to <strong>${email.value}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                <button id="dismiss">Dismiss message</button>
            </div>
        `;
        const dismiss = document.getElementById('dismiss');
        dismiss.addEventListener('click', e => {
            e.preventDefault();
            // reload page
            location.reload();
        });
    } else {
        console.log('invalid email');
        email.setCustomValidity('You have entered an invalid email address!');
    }
});

function validateEmail() {
    const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);

    if (isValid) {
        email.setCustomValidity(''); // Reset custom validity to empty (valid)
    } else {
        email.setCustomValidity('You have entered an invalid email address!');
    }

    return isValid;
}
