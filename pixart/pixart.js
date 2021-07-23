// identifying and saving document elements to use
const button = document.querySelector('#set-color');
const colorInput = document.querySelector('#color-field');
const brush = document.querySelector('.brush');

// listens for the button to be clicked, then saves the chosen background color as the brush color
button.addEventListener('click', function(event) {
    event.preventDefault();
    brush.style.backgroundColor = colorInput.value;
})

for (let i = 0; i < 8000; i++) {
    // identifying body element
    const body = document.querySelector('body');

    // this will append/create more div elements in body with the class square
    let moreDivs = document.createElement("div");
    moreDivs.setAttribute('class','square');
    body.appendChild(moreDivs);

    // this disables the screen refresh via the hint noted in the text, and listens for clicks in any moreDivs
    moreDivs.addEventListener('mouseover', function(event) {
        event.preventDefault();
        // colors any clicked moreDivs the user-input color
        moreDivs.style.backgroundColor = colorInput.value;
        })
}