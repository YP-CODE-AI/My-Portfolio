// Select all buttons
const buttons = document.querySelectorAll('.btn');

//Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        changeBackground(color);
    })
})

//Function to change background color
function changeBackground(color) {
    document.body.style.backgroundColor = color;

    console.log('Background changed to ${color}');
}