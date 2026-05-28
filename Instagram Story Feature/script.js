//Selectors
let display = document.querySelector('.mobile_display');
let stories = document.querySelector('.stories_container');
let showStory = document.querySelector('.content');

// Array containing Dynamic story data
let storyContent = [{dp: "https://images.unsplash.com/photo-1778510093540-0da0986f7d95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D", content: "https://images.unsplash.com/photo-1778402007155-dcea15b0c72b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"}, {dp: "https://images.unsplash.com/photo-1779777847962-4b01e7406620?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D", content: "https://images.unsplash.com/photo-1779434644450-08e20adce979?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"}, {dp: "https://images.unsplash.com/photo-1779561594199-f54f3bbbd4df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D", content: "https://images.unsplash.com/photo-1778426140955-860c61985e1e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"}, {dp: "https://images.unsplash.com/photo-1778837705864-37003a2c8177?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D", content: "https://images.unsplash.com/photo-1778701985261-09b227f9866c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"}, {dp: "https://images.unsplash.com/photo-1777988864563-42ce7fd253e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D", content: "https://images.unsplash.com/photo-1778274632385-d4bd48a242d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D"}, {dp: "https://images.unsplash.com/photo-1778434505577-28b8e26384f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D", content: "https://images.unsplash.com/photo-1778102088384-085cc8d55891?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D"}]


// Puts stories icons on screen based on number of Objects in storyContent
let clutter = "";

storyContent.forEach((elems, idx)=>{

    clutter += `<div class="story">
                    <img id="${idx}" src="${elems.dp}" alt="">
                </div>`;
})

// Display & Remove the actual story/post inside the story icons based on click event
stories.innerHTML = clutter;

stories.addEventListener('click', (val)=>{

    let index = val.target.id;
    image = `<img src="${storyContent[index].content}" alt="">`;
    showStory.innerHTML = image;

    showStory.classList.add('active');

    setTimeout(()=>{
        showStory.classList.remove('active');
    }, 3000)
})