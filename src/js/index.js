//global variables 
const grid_container = document.querySelector(".container");
let grid_array = [];

// add click event to box
function boxClick (box) {

    box.style.backgroundColor="#000";
}

//create grid function
function createGrid(grid_size) {

    //configure container
    grid_container.innerHTML = "";
    grid_container.style.cssText = `
                                    grid-template-rows: repeat(${grid_size},1fr);
                                    grid-template-columns:repeat(${grid_size},1fr)`;


    let grid_boxes = [];
    for(let i = 0; i < (grid_size * grid_size); i++) {

        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridBox.id = `box-${i}`;
        gridBox.onclick = () => {boxClick(gridBox)};
        grid_boxes.push(gridBox);
        grid_array = grid_boxes;

        grid_container.appendChild(gridBox);
    }



    return grid_boxes;
}


createGrid(32);