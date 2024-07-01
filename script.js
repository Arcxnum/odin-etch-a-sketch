let numGridElements = 16 * 16; //starting grid size

let gridContainer = document.querySelector("#gridContainer");
let childElements = gridContainer.querySelectorAll("*"); //to select all boxes

function changeColor(event) {
    let hoveredSquare = event.target;
    hoveredSquare.style.backgroundColor = "black";
}

for (let i = 0; i < numGridElements; i++) {
    let containerDiv = document.createElement("div");
    containerDiv.classList = "square";
    containerDiv.setAttribute("style", "width: 50px; height: 50px;");
    gridContainer.appendChild(containerDiv);

    containerDiv.addEventListener("mouseover", changeColor);
}

let resetBtn = document.querySelector("#resetBtn");
let eraserBtn = document.querySelector("#eraserBtn");
let sizeBtn = document.querySelector("#sizeBtn");

resetBtn.addEventListener("click", () => {
    const allSquares = gridContainer.querySelectorAll(".square");
    allSquares.forEach(square => square.style.backgroundColor = "white");
});
