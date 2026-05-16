// Selectors
let input = document.querySelector('input[type="checkbox"]');
let btn = document.querySelector('button');
let body = document.querySelector('body');
let card = document.querySelector('.card');


// Track any changes in input tag
input.addEventListener('change', ()=>{
    
    // Check if the checkbox of toggle is checked or not
    const lightMode = event.target.checked;
    // Checks the state of the lightMode variable
    switch (lightMode) {
    case true:
        applyTheme('light');
        break;
    case false:
        applyTheme('dark');
        break;
}
})

// Apply required thematic changes
function applyTheme(theme) {
    if(theme === 'light') {
        body.style.backgroundColor = 'wheat';
        body.style.color = '#333';
        card.style.border = '2px solid #333';
        btn.style.backgroundColor = 'salmon';

    } if(theme === 'dark') {
        body.style.backgroundColor = '#333';
        body.style.color = 'wheat';
        card.style.border = '2px solid wheat';
        btn.style.color = '#333';

    }
}