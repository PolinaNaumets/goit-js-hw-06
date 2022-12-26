const currentValue = document.querySelector("#value");

const decrBtn = document.querySelector('button[data-action="decrement"]');

const incrBtn = document.querySelector('button[data-action="increment"]');

let counter = 0;

decrBtn.addEventListener('click', () => {
    counter -= 1;
    return updateCount();
});
    
incrBtn.addEventListener('click', () => {
    counter += 1;
    return updateCount();
});

function updateCount() {
    return currentValue.innerHTML = counter;
};