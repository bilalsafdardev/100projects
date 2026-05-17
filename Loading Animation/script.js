// Selectors
let loading = document.querySelector('.inner');
let loadCount = document.querySelector('.info > h3');
let downloadBtn = document.querySelector('button');

// Click Event added
downloadBtn.addEventListener('click', ()=>{
    
    // Random Time Interval Generator
    let randomTime = 60 + Math.floor(Math.random() * 41);

    // Disable Button after 1st time clicked
    downloadBtn.style.pointerEvents = 'none';

    // Increment Logic
    let increment = 0;
    let loader = setInterval(()=>{
        increment++;
        loading.style.width = increment + '%';
        loadCount.textContent = increment + '%';
    }, randomTime);

    // Stop setTimeout to control the width overflow, loadCount, downloadBtn's text and print time taken on console
    setTimeout(()=>{
        clearInterval(loader);
        downloadBtn.textContent = 'Downloaded';
        console.log(`Downloaded in ${randomTime / 10} s`);
    }, randomTime * 100);

})

