document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input, textarea');
    const submitButton = document.getElementById('submitButton');

    function checkFormFilled() {
        return Array.from(inputs).every(input => input.value.trim() !== '');
    }

    function updateButtonState() {
        if (checkFormFilled()) {
            submitButton.classList.add('full');
        } else {
            submitButton.classList.remove('full');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', updateButtonState);
    });

    updateButtonState(); 
});