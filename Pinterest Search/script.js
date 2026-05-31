// Selectors
let container = document.querySelector('.container');
let overlay = document.querySelector('.overlay');
let input = document.querySelector('#searchinput');
let searchData = document.querySelector('.searchdata');

// Content of Images
let content = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

// Function to show Cards on Screen
function showCards(data) {
    let clutter = "";
    data.forEach((elems)=>{
        clutter += `<div class="box">
                        <img class="cursor-pointer" src=${elems.image} alt="">
                    </div>`;
        container.innerHTML = clutter;
    })
}
showCards(content);


// Filter and Show cards on screen based on user input
function searchResult() {
    input.addEventListener('focus', ()=>{
        overlay.style.display = 'block';
    })

    input.addEventListener('blur', ()=>{
        overlay.style.display = 'none';
        searchData.style.display = 'none';
    })

    

    input.addEventListener('input', (value)=>{

        let query = input.value.toLowerCase();
        // Handles Empty input
        if (query === "") {
            overlay.style.display = 'none';
            showCards(content);
            searchData.style.display = 'none';
            return;
        }
        // Shows output for all user queries from available data
        else {

            overlay.style.display = 'block';
            
            let filteredContent = content.filter((obj) => {
                return obj.name.toLowerCase().startsWith(query);
            })
            
            let clutter1 = "";

            filteredContent.forEach( (val) => {

                clutter1 += `<div class="res flex px-8 py-3">
                                <i class="ri-search-line font-semibold mr-5"></i>
                                <h3 class="font-semibold">${val.name}</h3>
                            </div>`;
            })
            
            searchData.innerHTML = clutter1;
            searchData.style.display = 'block';

            showCards(filteredContent);
        }
    })
}

searchResult();


















// let container = document.querySelector('.container');
// let overlay = document.querySelector('.overlay');
// let input = document.querySelector('#searchinput');
// let searchData = document.querySelector('.searchdata');

// let dataArray = [
//     {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
// ];

// // Helper function to render image cards into the container
// function renderCards(dataArray) {
//     let clutter = "";
//     dataArray.forEach((elem) => {
//         clutter += `<div class="box">
//                         <img class="cursor-pointer" src="${elem.image}" alt="">
//                     </div>`;
//     });
//     container.innerHTML = clutter;
// }

// function searchResult() {
//     input.addEventListener('focus', () => {
//         overlay.style.display = 'block';
//     });

//     input.addEventListener('blur', () => {
//         overlay.style.display = 'none';
//         searchData.style.display = 'none';
//     });

//     input.addEventListener('input', () => {
//         let query = input.value.toLowerCase().trim();

//         // FIX 1: If the input is empty, reset everything and stop execution
//         if (query === "") {
//             searchData.style.display = 'none';
//             renderCards(content); // Restore all original cards
//             return; 
//         }

//         // FIX 2: Added .toLowerCase() to query variable above
//         let filteredContent = content.filter((obj) => {
//             return obj.name.toLowerCase().startsWith(query);
//         });
        
//         let clutter1 = "";
//         let clutter2 = "";

//         filteredContent.forEach((val) => {
//             clutter1 += `<div class="res flex px-8 py-3">
//                             <i class="ri-search-line font-semibold mr-5"></i>
//                             <h3 class="font-semibold">${val.name}</h3>
//                         </div>`;

//             clutter2 += `<div class="box">
//                             <img class="cursor-pointer" src="${val.image}" alt="">
//                         </div>`;
//         });

//         // FIX 3: Moved innerHTML updates OUTSIDE of the forEach loop
//         container.innerHTML = clutter2;
//         searchData.innerHTML = clutter1;
//         searchData.style.display = 'block';
//     });
// }

// searchResult();
// renderCards(content); // Render the initial cards on load
