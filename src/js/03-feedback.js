
import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const formData = {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));  
}

function onFormSubmit(evt) {
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
}

function populateForm(evt) {
const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedMessage) {
    console.log(savedMessage);
    inputEl.value = savedMessage.email;
    textareaEl.value = savedMessage.message;  
}
}
