document.getElementById('account').addEventListener('submit', function (event) {
    var form = event.target;
    var inputs = form.querySelectorAll('input');
    inputs.forEach(function (input) {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
    });

    // Prevent form submission if there are invalid fields
    if (!form.checkValidity()) {
        event.preventDefault();
    }
});