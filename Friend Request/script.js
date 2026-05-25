let btn = document.querySelector('.content > button');
let message = document.querySelector('.confirmation > h4');
let box = document.querySelector('.confirmation');

// Flag to track the current state
    let isFriend = true;

// Click Event
btn.addEventListener('click', ()=>{
    // Work as switch
    isFriend = !isFriend
    
    //Conditions
    if (isFriend) {
        btn.textContent = "Remove Friend";
        
        // Appearance Time
        let notification = setTimeout(()=>{
            message.style.opacity = 1;
            message.style.transform = 'scale(1)';
            box.style.backgroundColor = 'rgba(24, 24, 24, 0.9)';

            message.textContent = "You are mutual friends now!";
        }, 200)

        // Disappearance Time
        setTimeout(()=>{
            message.style.opacity = 0;
            message.style.transform = 'scale(0)';
            box.style.backgroundColor = 'transparent';
        }, 1700)  
    }
    else {
        btn.textContent = "Add Friend";

        // Appearance Time
        let notification = setTimeout(()=>{
            message.style.opacity = 1;
            message.style.transform = 'scale(1)';
            box.style.backgroundColor = 'rgba(24, 24, 24, 0.9)';

            message.textContent = "Friend has been removed from the list!"

        }, 200)

        // Disappearance Time
        setTimeout(()=>{
            message.style.opacity = 0;
            message.style.transform = 'scale(0)';
            box.style.backgroundColor = 'transparent';
        }, 1700)
    }
    
})