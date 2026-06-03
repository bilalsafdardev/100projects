// Selectors
let main = document.querySelector('main');
let box = document.querySelector('.box');
let h3 = document.querySelector('h3');

// Hover Spotlight Effect
main.addEventListener('mousemove', (val) => {

    box.style.setProperty('--x', `${val.clientX}px`);
    box.style.setProperty('--y', `${val.clientY}px`);
    
})

// Matrix Characters
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqrstuvwxyz";

// Tracker Variables
let textActual = h3.textContent;
let iteration = 0;
let duration = null;

// Event Trigger
h3.addEventListener('mouseenter', (e) => {
    iteration = 0;
    clearInterval(duration);
    duration = setInterval(showMatrix, 14);
})

// Function to show the Matrix
function showMatrix() {
    
    // Changes the H3 
    let effect = textActual.split('').map((text, idx) => {
        
        if(idx < iteration) {
            return text;
        }

        return characters.split('')[Math.floor(Math.random() * 51)]
    }).join('');

    h3.textContent = effect;
    iteration += 0.2;
    
    // Restarts the function for repeatative Mouse Enter Triggers 
    if (iteration >= textActual.length) {
        clearInterval(duration);
    }
    
}
