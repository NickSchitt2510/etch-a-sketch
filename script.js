// Create div of the grid
function createGrid(gridSize) {

    const canvas = document.querySelector('.canvas');

    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement('div');

        column.classList.add('outline', 'column');
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('outline', 'cell');
            column.appendChild(cell);
        }
        canvas.appendChild(column);
    }
}

function hoverEffect(className) {
    // Set up eventlistener for all the div
    const cells = document.querySelectorAll('.canvas > div > div')
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add(className);
        });
    })
}

function removeGrid() {
    // Remove grid
    const cells = document.querySelectorAll('.canvas > div > div');
    cells.forEach(cell => {
        cell.remove();
    });
    const cols = document.querySelectorAll('.canvas > div');
    cols.forEach(col => {
        col.remove();
    });
}

function changeGridSizeBySlider() {
    let slider = document.getElementById('gridRange');
    const size = document.querySelector('.slidecontainer > label');
    createGrid(slider.value);
    size.textContent = slider.value;
    hoverEffect('change-black');
    slider.oninput = function () {
        removeGrid();
        size.textContent = this.value;
        createGrid(this.value);
        const label = document.querySelector('.right > label');
        label.textContent = `${slider.value}X${slider.value} Grid`;
        hoverEffect('change-black');
    };
}


function toggleNoLine() {
    const cells = document.querySelectorAll('.canvas > * > *');
    cells.forEach((cell) => {
        cell.classList.remove('outline');
    });
    const cols = document.querySelectorAll('.canvas > *');
    cols.forEach((col) => {
        col.classList.remove('outline');
    });
    const canvas = document.getElementById('canvas');
    console.log(canvas);
    canvas.style.borderTop = "2px solid black";
    canvas.style.borderLeft = "2px solid black";
}

// clear the canvas
function clearCanvas() {
    const cells = document.querySelectorAll('.canvas > * > *');
    cells.forEach((cell) => {
        cell.classList.remove('change-black');
    })
}


// set up even listener for all buttons
function buttonFunction() {
    const clear = document.querySelector('#clear');
    console.log(clear);
    clear.addEventListener('click', clearCanvas);
}

// Create random color

changeGridSizeBySlider();
buttonFunction();