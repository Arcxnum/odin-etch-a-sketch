const container = document.querySelector("#container");
const gridBtn = document.querySelector("#grid");
let promptInput = 0;
function createGrid(promptInput){

    let widthValue = `calc(600px / ${promptInput})`;
    let heightValue = widthValue;

    for(i = 0; i < (promptInput * promptInput); i++){
        let div = document.createElement("div");
        div.setAttribute("style", `width: ${widthValue}; height: ${heightValue}; `);
        container.appendChild(div);
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });
    }
}

gridBtn.addEventListener('click', () => {
    while (container.firstChild) {
        container.firstChild.remove();
      }

    promptInput = Number(promptInput); 
    promptInput = prompt('Enter the grid size (Between 1 - 100)');
    if(promptInput >= 1 && promptInput <= 100){
        createGrid(promptInput);
    }
    else {
        alert("Invalid, defaulting to size 16");
        createGrid(16);
    }
})

createGrid(16);