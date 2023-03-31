// Selector Mode Handlers
const selectorModeClickHandler = (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let index = getClickedObject(x, y);
    if (index === -1) return false;
    rects[index].isSelected = true;

    renderRectangles();
}

function getClickedObject(x, y) {
    for (let i = rects.length - 1; 0 <= i ; i--) {
        let rect = rects[i];
        if (rect.startX <= x && x <= rect.startX + rect.width && 
            rect.startY <= y && y <= rect.startY + rect.height) {
                return i;
        }
    }
    return -1;
}

// Selector Mode events
function toggleSelectorMode() {
    isSelectorMode = !isSelectorMode;
    if (isSelectorMode) {
        activateSelectorMode();
    }else {
        deactivateSelectorMode();
    }
}

function activateSelectorMode() {
    canvas.addEventListener("click", selectorModeClickHandler);
    selectorBtn.style.backgroundColor='darkgray';

    deactivateRectangleMode();
    isRectangleMode = false;
}

function deactivateSelectorMode() {
    canvas.removeEventListener("click", selectorModeClickHandler);
    selectorBtn.style.backgroundColor='#EFEFEF';

    removeIsSelected();
}