// rect
class Rectangle {
    constructor(startX, startY, width, height, fillStyle, strokeStyle) {
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
        this.isSelected = false;
    }
}

// containers to store completed shape
rects = [];

const selectorBtn = document.getElementById("selector-btn");
const rectangleBtn = document.getElementById("rectangle-btn");
const filledColorPicker = document.getElementById("filled-color-picker");
const strokedColorPicker = document.getElementById("stroked-color-picker");

// get references to the canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// style the context
const defaultLineWidth = 3;
const selectedLineWidth = 10;
ctx.fillStyle = filledColorPicker.value;
ctx.strokeStyle = strokedColorPicker.value;
ctx.lineWidth = defaultLineWidth;


// this flage is true when the user is dragging the mouse
let isPressed = false;

// these vars will hold the starting mouse position

// current x and y
var startX;
var startY;

var prevStartX = 0;
var prevStartY = 0;

var prevWidth = 0;
var prevHeight = 0;

// render all rectangles
function renderRectangles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rects.length; i++) {
        let rect = rects[i];

        if (rect.isSelected) {
            ctx.lineWidth = selectedLineWidth;
            ctx.fillStyle = "red";
        }else {
            ctx.lineWidth = defaultLineWidth;
            ctx.fillStyle = rect.fillStyle;
        }
        
        ctx.strokeStyle = rect.strokeStyle;
        ctx.fillRect(rect.startX, rect.startY, rect.width, rect.height);
    }
}

// tools controler
selectorBtn.addEventListener("click", toggleSelectorMode);
rectangleBtn.addEventListener("click", toggleRectangleMode);


// color Picker events
filledColorPicker.addEventListener("change", (e) => {
    ctx.fillStyle = e.target.value;
});

strokedColorPicker.addEventListener("change", (e) => {
    ctx.strokeStyle = e.target.value;
});


function removeIsSelected() {
    for (let i = 0; i < rects.length; i++) rects[i].isSelected = false;
    renderRectangles();
}

