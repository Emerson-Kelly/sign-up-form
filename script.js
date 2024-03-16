document.getElementById('account').addEventListener('submit', function (event) {
    var form = event.target;
    var inputs = form.querySelectorAll('input');
    var password = form.querySelector('#password');
    var confirmPassword = form.querySelector('#confirm-password');
    var errorMessage = form.querySelector('#confirm-password + .error-message');

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match.');
        confirmPassword.classList.add('invalid');
        errorMessage.style.display = 'block';
    } else {
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
