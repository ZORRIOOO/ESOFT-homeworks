'use strict';

const form = document.querySelector('.form');
const usernameElement = document.querySelector('#username');
const emailElement = document.querySelector('#email');
const passwordElement = document.querySelector('#password');
const confirmPasswordElement = document.querySelector('#password-confirm');

const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameElement.value.trim();

    if (!isRequired(username)) {
        showError(usernameElement, 'Имя пользователя не должно оставаться пустым.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameElement, `Имя пользователя должно быть от ${min} до ${max} символов.`)
    } else {
        showSuccess(usernameElement);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailElement.value.trim();
    if (!isRequired(email)) {
        showError(emailElement, 'Электронная почта не должна оставаться пустой.');
    } else if (!isEmailValid(email)) {
        showError(emailElement, 'Неверно набранная электронная почта.')
    } else {
        showSuccess(emailElement);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;

    const password = passwordElement.value.trim();

    if (!isRequired(password)) {
        showError(passwordElement, 'Пароль не должен оставаться пустым.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordElement, 'Пароль должен состоять, как минимум, из 8 символов, которые включают, как минимум, 1 символ с верхним регистром, 1 с нижним, 1 цифру и 1 специальный символ (!@#$%^&*).');
    } else {
        showSuccess(passwordElement);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;

    const confirmPassword = confirmPasswordElement.value.trim();
    const password = passwordElement.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordElement, 'Пожалуйста, введите пароль снова.');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordElement, 'Пароли не совпадают.');
    } else {
        showSuccess(confirmPasswordElement);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if (isFormValid) {
        console.log('Form is valid.');
    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));