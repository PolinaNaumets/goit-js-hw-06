//Напиши скрипт, який реагує на зміну значення input#font-size-control
//(подія input) і змінює інлайн - стиль span#text,
//оновлюючи властивість font - size.
//В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const slider = document.querySelector("#font-size-control");

const rangingText = document.querySelector("#text");

slider.addEventListener('input', (event) => {
    const value = event.currentTarget.value
rangingText.style.fontSize = value + "px"
})