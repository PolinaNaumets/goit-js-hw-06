//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст
// щодо правильної кількості введених символів.
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length > inputEl.dataset.length) {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    } else {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid")
    }
})