import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
// const emailInput = document.querySelector('.feedback-form input');
// const messageImput = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormInput(e) {
    formData[e.target.name] = e.target.value.trim;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();

    if(form.elements.email.value === '' || form.elements.message.value === '') {
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

    console.log(formData)

    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
}

function populateForm() {
    const saveLocalStorage = localStorage.getItem(STORAGE_KEY);
    const objectFormLocalStorage = JSON.parse(saveLocalStorage);
    if(objectFormLocalStorage) {
        form.elements.email.value = objectFormLocalStorage.form.elements.email.value;
        form.elements.message.value = objectFormLocalStorage.form.elements.message.value
    }
}