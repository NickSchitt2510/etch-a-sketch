const GRIDSIZE = 16;

// Create div
function createGrid() {

    const container = document.querySelector('.container');

    for (let i = 0; i < GRIDSIZE; i++) {
        const column = document.createElement('div');

        column.classList.add('outline', 'column');
        for (let j = 0; j < GRIDSIZE; j++) {
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
        console.log(cell);
        cell.addEventListener('mouseover', () => {
            cell.classList.add(className);
        });
    })
}

createGrid();
hoverEffect('change-black');