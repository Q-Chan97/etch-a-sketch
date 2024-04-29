generateDefaultGrid();
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetGrid);

function generateDefaultGrid() {
    let newGridTile = document.createElement("div");
    let gridContainer = document.querySelector('#gridContainer');
    gridContainer.appendChild(newGridTile);
    
    gridContainer.addEventListener('mouseover', changeColor);

    let clonedGrid;
    for (let i = 0; i < 16 * 16 - 1; i++) {
        clonedGrid = newGridTile.cloneNode();
        gridContainer.appendChild(clonedGrid);
    }
};

function changeColor(event) {
    event.target.classList.add("tileHovered");
};

function resetGrid() {
    let allTiles = document.querySelectorAll('.tileHovered');
    allTiles.forEach(element => {
        element.classList.remove("tileHovered");
    });
    resizeGrid();
};

function resizeGrid() {
    let newSize = prompt("How many squares would you like per side? In between 1 and 100 please.");
    if (newSize > 100) {
        prompt("That's too high! Try again.");
        return; //Needed to stop the unwanted value going through
    }
    else if (Math.sign(newSize) == 0 || Math.sign(newSize) == -1) {
        prompt("That's a bit too low. Try again.");
        return;
    }
    else if (newSize === null) {
        generateDefaultGrid();
    }
    else {
        const styleSheet = document.styleSheets[0];
        styleSheet.cssRules[2].style.gridTemplateRows = `repeat(${newSize}, auto)`;
        styleSheet.cssRules[2].style.gridTemplateColumns = `repeat(${newSize}, auto)`;
    } // Tells CSS to use the new size for the number of rows and columns
    removeTiles();
    generateUserGrid(newSize); // Removes previous tiles and adds in new ones
};

function removeTiles() {
    let gridContainer = document.querySelector('#gridContainer');
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild); // Removes default grids so new ones can be added in
    }
};

function generateUserGrid(newSize) {
    let gridContainer = document.querySelector('#gridContainer');
    let newGridTile = document.createElement("div");
    gridContainer.appendChild(newGridTile);

    let clonedGrid;
    for (let i = 0; i < newSize * newSize - 1; i++) {
        clonedGrid = newGridTile.cloneNode();
        gridContainer.appendChild(clonedGrid);
    }
};