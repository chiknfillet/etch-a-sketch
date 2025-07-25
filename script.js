const container = document.querySelector('.container')

function createGrid(size = 16) {

    for (let i = 0; i < size; i++) {
        const newRow = document.createElement('div')
        newRow.classList.add('row')
        for (let i = 0; i < size; i++) {
            const newDiv = document.createElement("div");

            newDiv.classList.add("block");

            newDiv.addEventListener('mouseover', () => {
                newDiv.style.backgroundColor = 'red'
            })

            newRow.appendChild(newDiv)
        }
        container.appendChild(newRow)
    }
}

createGrid()

const newGrid = document.querySelector('.new-grid')
newGrid.addEventListener('click', () => {
    container.innerHTML = '';

    let size = Number(prompt("New Grid's Size (1 - 100)"))
    if (size > 100) {
        size = 100;
    } else if (size < 1) {
        size = 1
    }

    createGrid(size)
});
