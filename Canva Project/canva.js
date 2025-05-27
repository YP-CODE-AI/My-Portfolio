const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft; //Get canvas left offset
const canvasOffsetY = canvas.offsetTop; //Get canvas top offset 

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;  //Track if the mouse is pressed
let lineWidth = 5;  //Default line position
let startX;
let startY;
//Listen for clicks on the toolbarSS
toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height); //Clear the whole canvas 
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value; //Get the value from input when user changes line width
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});
//Function to draw on canvas
const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth; //Set the current line width 
    ctx.lineCap = 'round'; //Make the line ends smooth 

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY); //Draw a line to curent mouse position
    ctx.stroke(); //Show the line
}
//Start drawing when mouse is pressed
canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});
//Stop drawing when mouse is released
canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});
//Draw while moving the mouse
canvas.addEventListener('mousemove', draw);