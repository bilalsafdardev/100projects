let btn = document.querySelector('button');
let photo = document.querySelector('.photo');
let heartIcon = document.querySelector('#heart');

// Triggers on Btn Click
btn.addEventListener('click', ()=>{
    animate();
})

// Triggers on Picture dblClick
photo.addEventListener('dblclick', ()=>{
    animate();
})

function animate() {
    // Shows Heart on event activation
    let dislayHeart = setTimeout(()=>{
        heartIcon.classList.add('animated_heart');
    }, 500)

    //Removes Heart from screen
    setTimeout(()=>{
        // Clears the timeout from previous trigger
        clearTimeout(dislayHeart);

        // Reverts the Show Heart changes
        heartIcon.classList.remove('animated_heart');
    }, 1800)
}