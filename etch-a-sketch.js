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
    }
    else if (Math.sign(newSize) == 0 || Math.sign(newSize) == -1) {
        prompt("That's a bit too low. Try again.");
    }
    else if (newSize == null) {
        generateDefaultGrid();
    }
}