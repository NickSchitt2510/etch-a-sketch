// Create div of the grid
function createGrid(gridSize) {

    const container = document.querySelector('.container');

    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement('div');

        column.classList.add('outline', 'column');
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('outline', 'cell');
            column.appendChild(cell);
        }
        container.appendChild(column);
    }
}

function hoverEffect(className) {
    // Set up eventlistener for all the div
    const cells = document.querySelectorAll('.container > div > div')
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add(className);
        });
    })
}

function removeGrid() {
    // Remove grid
    const cells = document.querySelectorAll('.container > div > div');
    cells.forEach(cell => {
        cell.remove();
    });
    const cols = document.querySelectorAll('.container > div');
    cols.forEach(col => {
        col.remove();
    });
}

function changeGridSize() {
    let slider = document.getElementById('gridRange');
    createGrid(slider.value);
    hoverEffect('change-black');
    slider.onchange = function () {
        removeGrid();
        console.log(this.value);
        createGrid(this.value);
        hoverEffect('change-black');
    }
}

function toggleNoLine() {
    const cells = document.querySelectorAll('.container > * > *');
    cells.forEach((cell) => {
        cell.classList.remove('outline');
    });
    const cols = document.querySelectorAll('.container > *');
    cols.forEach((col) => {
        col.classList.remove('outline');
    });
    const container = document.getElementById('container');
    console.log(container);
    container.style.borderTop = "2px solid black";
    container.style.borderLeft = "2px solid black";
}

// Create random color

changeGridSize();