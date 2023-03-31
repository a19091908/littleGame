// Rectangle Mode events

function toggleRectangleMode() {
    isRectangleMode = !isRectangleMode;
    if (isRectangleMode) {
        activateRectangleMode();
    }else {
        deactivateRectangleMode();
    }
}

function activateRectangleMode() {
    canvas.addEventListener("mousedown", rectangleModeMousedownHandler);
    canvas.addEventListener("mouseup", rectangleModeMouseupHandler);
    canvas.addEventListener("mousemove", rectangleModeMousemoveHandler);
    rectangleBtn.style.backgroundColor='darkgray';
}

function deactivateRectangleMode() {
    canvas.removeEventListener("mousedown", rectangleModeMousedownHandler);
    canvas.removeEventListener("mouseup", rectangleModeMouseupHandler);
    canvas.removeEventListener("mousemove", rectangleModeMousemoveHandler);
    rectangleBtn.style.backgroundColor='#EFEFEF';
}


// Reactangle Mode Handlers
const rectangleModeMousedownHandler = (e) => {
    isPressed = true;
    startX = e.offsetX;
    startY = e.offsetY;
}

const rectangleModeMouseupHandler = (e) => {
    var width = e.offsetX - startX;
    var height = e.offsetY - startY;
    rects.push(new Rectangle(startX, startY, width, height, ctx.fillStyle, ctx.strokeStyle));

    isPressed = false;
    startX = undefined;
    startY = undefined;

    renderRectangles();
};

const rectangleModeMousemoveHandler = (e) => {
    if (isPressed) {
        // get the current mouse position
        mouseX = e.offsetX;
        mouseY = e.offsetY;

        var width = mouseX - startX;
        var height = mouseY - startY;

        renderRectangles();
        ctx.fillRect(startX, startY, width, height);

        x = mouseX;
        y = mouseY;

        prevStartX = startX;
        prevStartY = startY;

        prevWidth = width;
        prevHeight = height;
    }
};

// Rectangle Mode events

function toggleRectangleMode() {
    isRectangleMode = !isRectangleMode;
    if (isRectangleMode) {
        activateRectangleMode();
    }else {
        deactivateRectangleMode();
    }
}

function activateRectangleMode() {
    canvas.addEventListener("mousedown", rectangleModeMousedownHandler);
    canvas.addEventListener("mouseup", rectangleModeMouseupHandler);
    canvas.addEventListener("mousemove", rectangleModeMousemoveHandler);
    rectangleBtn.style.backgroundColor='darkgray';

    deactivateSelectorMode();
    isSelectorMode = false;
}

function deactivateRectangleMode() {
    canvas.removeEventListener("mousedown", rectangleModeMousedownHandler);
    canvas.removeEventListener("mouseup", rectangleModeMouseupHandler);
    canvas.removeEventListener("mousemove", rectangleModeMousemoveHandler);
    rectangleBtn.style.backgroundColor='#EFEFEF';
}
