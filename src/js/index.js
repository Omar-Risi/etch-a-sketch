//global variables 
const grid_array = [];

//create grid function
function createGrid(grid_size) {

    let grid_boxes = [];
    for(let i = 0; i < grid_size; i++) {

        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridBox.id = `box-${i}`;
        grid_boxes.push(gridBox);
        
        //add to GridContainer
    }


    return grid_boxes;
}


console.log(createGrid(32))