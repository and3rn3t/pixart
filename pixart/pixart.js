const button = document.querySelector('#set-color');
const colorInput = document.querySelector('#color-field');
const brush = document.querySelector('.brush');

button.addEventListener('click', function(event) {
    event.preventDefault();
    brush.style.backgroundColor = colorInput.value;
})

for (let i = 0; i < 20; i++) {
    const body = document.querySelector('body');
    let moreDivs = document.createElement("div");
    moreDivs.setAttribute('class','square');
    body.appendChild(moreDivs);
}

// console.log(button);
// console.log(colorText);
// console.log(brushColor);