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
};