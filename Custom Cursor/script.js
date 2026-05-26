// Selectors
let main = document.querySelector('main');
let contentBox = document.querySelectorAll('.content');


// Apply changes on every child of nodeList
contentBox.forEach((nodesList)=>{

    let img =  nodesList.childNodes[3];

    // Track mouse entring inside box
    nodesList.addEventListener('mouseenter', ()=>{
        // Shows the cursor
        img.style.opacity = 1;
    })

    // Keep img moving with cursor movement inside box
    nodesList.addEventListener('mousemove', (state)=>{

        // Calculates the x and y cordinates of mouse movement
        let rect = nodesList.getBoundingClientRect();
        let x = state.clientX - rect.left;
        let y = state.clientY - rect.top;

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
    })

    // Track mouse leaving outside box
    nodesList.addEventListener('mouseleave', ()=>{
        // Hides the cursor
        img.style.opacity = 0;
    })
})


