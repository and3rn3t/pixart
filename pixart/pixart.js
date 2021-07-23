const button = document.querySelector('#set-color');
const colorInput = document.querySelector('#color-field');
const brush = document.querySelector('.brush');

button.addEventListener('click', function(event) {
    event.preventDefault();
    brush.style.backgroundColor = colorInput.value;
})

// console.log(button);
// console.log(colorText);
// console.log(brushColor);