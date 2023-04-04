import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageImput = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormInput() {
    const formData = {
        emailInput: emailInput.value,
        messageImput: messageImput.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();

    if(emailInput.value === '' || messageImput.value === '') {
        const random = [
            'Try again',
            'Not enough text',
            'Go on to type',
            'I believe in you',
        ]

        for (let i of random) {
            return alert(random[Math.floor(Math.random() * random.length)]);
        }
    }

    const saveLocalStorage = localStorage.getItem(STORAGE_KEY);
    const objectFormLocalStorage = JSON.parse(saveLocalStorage);

    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
}

function populateForm() {
    const saveLocalStorage = localStorage.getItem(STORAGE_KEY);
    const objectFormLocalStorage = JSON.parse(saveLocalStorage);
    if(objectFormLocalStorage) {
        emailInput.value = objectFormLocalStorage.emailInput;
        messageImput.value = objectFormLocalStorage.messageImput
    }
}