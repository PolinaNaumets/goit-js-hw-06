//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст
// щодо правильної кількості введених символів.

const inputEl = document.querySelector("#validation-input" )

inputEl.addEventListener("blur", submitForm)

function submitForm (event){

    if (inputEl.value.length == inputEl.dataset.length){
        inputEl.classList ="valid"
    } else {
        inputEl.classList ="invalid"
    }
}