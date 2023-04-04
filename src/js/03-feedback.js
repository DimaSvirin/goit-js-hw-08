import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input',
    throttle(element => {
        formData[element.target.name] = element.target.value;
        onInputFormValue();
    }, 500)
);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // const {elements: (email, message)} = event.currentTarget;

    if(email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
    }
    throttle(onInputFormValue, 500);

    event.currentTarget.reset();
}

function onInputFormValue() {
    const inputValue = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, inputValue);

}




