import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const localCurrent = JSON.parse(localStorage.getItem(STORAGE_KEY));
const formData = localCurrent ? localCurrent : {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

for (const el of form.elements) {
    el.value = formData[el.name] ? formData[el.name] : '';
  }
function onFormInput(e) {
    formData[e.target.name] = e.target.value;
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