document.getElementById('account').addEventListener('submit', function (event) {
    let form = event.target;
    let inputs = form.querySelectorAll('input');
    let password = form.querySelector('#password');
    let confirmPassword = form.querySelector('#confirm-password');
    let errorMessage = form.querySelector('#confirm-password + .error-message');

    if (password.value !== confirmPassword.value) {
        confirmPassword.style.backgroundColor = "#ffdddd";
        confirmPassword.setCustomValidity('Passwords do not match.');
        confirmPassword.classList.add('invalid');
        errorMessage.style.display = 'block';
    } else {
        confirmPassword.style.backgroundColor = "#ddffdd";
        confirmPassword.setCustomValidity('');
        confirmPassword.classList.remove('invalid');
        errorMessage.style.display = 'none';
    }

    inputs.forEach(function (input) {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
    });

    if (!form.checkValidity()) {
        event.preventDefault();
    }
});