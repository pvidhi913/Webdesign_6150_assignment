$(document).ready(() => {
     // Check URL parameters to get the 'userName'
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('userName');

    // Display the logged-in user name or a message if no user is logged in
    if (username) {
        $('#usernameDisplay').text(`Logged-in User: ${username}`);
    } else {
        $('#usernameDisplay').text('No user logged in.');
    }

      // Function to show an error message for a specific input field
    const showError = (inputId, message) => {
        $(`#${inputId}Error`).text(message);
        $(`#${inputId}`).css('border-color', 'red');
    };

    
    // Function to clear the error message for a specific input field
    const clearError = (inputId) => {
        $(`#${inputId}Error`).text('');
        $(`#${inputId}`).css('border-color', '');
    };

     // Function to validate a numeric input field
    const validateNumberField = (inputId) => {
        const inputValue = $(`#${inputId}`).val();

        if (inputValue === '') {
            showError(inputId, 'This field cannot be empty');
            return false;
        }

        if (!$.isNumeric(inputValue)) {
            showError(inputId, 'Please enter only numbers');
            return false;
        }

        if (!isFinite(inputValue)) {
            showError(inputId, 'Please enter a finite number');
            return false;
        }

        clearError(inputId);
        return true;
    };
  // Function to validate both number fields
    const validateFields = () => {
        const isValidNumber1 = validateNumberField('number1');
        const isValidNumber2 = validateNumberField('number2');

        return isValidNumber1 && isValidNumber2;
    };
// Function to perform the selected operation
    const performOperation = (operation) => {
        clearError('result');
        const isValid = validateFields();

        if (isValid) {
            const num1 = parseFloat($('#number1').val());
            const num2 = parseFloat($('#number2').val());

            if (!isNaN(num1) && !isNaN(num2)) {
                if (operation === 'add') {
                    $('#result').val(num1 + num2);
                } else if (operation === 'subtract') {
                    $('#result').val(num1 - num2);
                } else if (operation === 'multiply') {
                    $('#result').val(num1 * num2);
                } else if (operation === 'divide') {
                    if (num2 !== 0) {
                        $('#result').val(num1 / num2);
                    } else {
                        showError('result', 'Division by zero is not allowed.');
                    }
                }
            } else {
                showError('result', 'Please enter valid numbers.');
            }
        }
    };
    // Event handlers for the operation buttons
    $('#add, #subtract, #multiply, #divide').on('click', (e) => {
        const operation = e.target.id;
        performOperation(operation);
    });

    
});
