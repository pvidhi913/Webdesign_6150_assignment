var email;
$(document).ready(()=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;

    

//validations
const validationStatus = {
    email: false,
    userName: false,
    password: false,
    confirmPassword: false,
};

const showError = (inputId, message) => {
    $(`#${inputId}-error`).text(message);
    $(`#${inputId}`).css('border-color', 'red');
    validationStatus[inputId] = false;
};

const clearError = (inputId) => {
    $(`#${inputId}-error`).text('');
    $(`#${inputId}`).css('border-color', '');
};
const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
        showError('email', 'Invalid email format. Use a Northeastern email address.');
        return false;
    }
    return true;
};

const validateUserName = (userName) => {
    if (userName.length < 3 || userName.length > 20) {
        showError('userName', 'User Name must be between 3 and 20 characters.');
        return false;
    }
    if (!/^[a-zA-Z0-9]+$/.test(userName)) {
        showError('userName', 'User Name can only contain letters and numbers.');
        return false;
    }
    
    return true;
};

const validatePassword = (password) => {
    if (!/^[A-Z]/.test(password)) {
        showError('password', 'Password must start with a capital letter.');
        return false;
    }
    if (password.length < 8 || password.length > 20) {
        showError('password', 'Password must be between 8 and 20 characters.');
        return false;
    }
    
    if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(password)) {
        showError('password', 'Password can only contain letters, numbers, and special characters: !@#$%^&*');
        return false;
    }
    return true;
};

const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match.');
        return false;
    }
    return true;
};

const enableLoginButton = () => {
    if (Object.values(validationStatus).every(status => status)) {
        $('#loginButton').prop('disabled', false);
    }
};

const disableLoginButton = () => {
    $('#loginButton').prop('disabled', true);
};

const validateField = (inputId) => 

{
    clearError(inputId);

    const inputValue = $(`#${inputId}`).val();
//validations for null 
    if (inputValue === '') {
        showError(inputId, 'This Field cannot be empty');
        validationStatus[inputId] = false;
    } else {
        if (inputId === 'email' && validateEmail(inputValue)) {
            validationStatus[inputId] = true;
        }
        if (inputId === 'userName' && validateUserName(inputValue)) {
            validationStatus[inputId] = true;
        }
        if (inputId === 'password' && validatePassword(inputValue)) {
            validationStatus[inputId] = true;
        }
        if (inputId === 'confirmPassword' && validateConfirmPassword($('#password').val(), inputValue)) {
            validationStatus[inputId] = true;
        }
    }
    enableLoginButton();
};

disableLoginButton();

 // Bind event handlers for the input fields
 $('#email, #userName, #password, #confirmPassword').on('input', function () {
    const inputId = $(this).attr('id');
    validateField(inputId);
});

$('#loginButton').on('click', (e) => {
    e.preventDefault();

    // Validate all input fields
    for (const inputId in validationStatus) {
        validateField(inputId);
    }

    // Redirect only if all input fields are successfully validated and non-empty
    if (Object.values(validationStatus).every(status => status)) {
        const userName = $('#userName').val();
        window.location.href = `calculator.html?userName=${userName}`;
    }
});

});

