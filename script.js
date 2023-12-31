function changeGridSizeBySlider() {
    let slider = document.getElementById('gridRange');
    const size = document.querySelector('.slidecontainer > label');
    createGrid(slider.value);
    size.textContent = slider.value;
    changeBlack();
    slider.oninput = function () {
        removeGrid();
        size.textContent = this.value;
        createGrid(this.value);
        const label = document.querySelector('.right > label');
        label.textContent = `${slider.value}X${slider.value} Grid`;
        changeBlack();
    };
}


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


function changeBlack() {
    clearCanvas();
    // Set up eventlistener for all the div
    const cells = document.querySelectorAll('.canvas > div > div')
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    });
}


// clear the canvas
function clearCanvas() {
    const cells = document.querySelectorAll('.canvas > * > *');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}


function changeRainbow() {
    clearCanvas();
    const cells = document.querySelectorAll('.canvas > div > div')
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            let randColor = generateRandomColor();
            cell.style.backgroundColor = randColor;
            if (cell.style.backgroundColor) {
                cell.style.backgroundColor = randColor;
            }
        });
    });
}


// Create random color
function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; // returns a floating point random number
    
    // Convert the floating-point number to an integer
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16); // 16 hexidecimal
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}


// set up even listener for all buttons
function buttonFunction() {
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', clearCanvas);
    const rainbow = document.querySelector('#rainbow');
    rainbow.addEventListener('click', changeRainbow);
    const black = document.querySelector('#black');
    black.addEventListener('click', changeBlack);
}


changeGridSizeBySlider();
buttonFunction();


// function feature
// function toggleNoLine() {
//     const cells = document.querySelectorAll('.canvas > * > *');
//     cells.forEach((cell) => {
//         cell.classList.remove('outline');
//     });
//     const cols = document.querySelectorAll('.canvas > *');
//     cols.forEach((col) => {
//         col.classList.remove('outline');
//     });
//     const canvas = document.getElementById('canvas');
//     console.log(canvas);
//     canvas.style.borderTop = "2px solid black";
//     canvas.style.borderLeft = "2px solid black";
// }


