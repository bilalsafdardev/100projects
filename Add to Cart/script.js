// Selectors
let productsContainer = document.querySelector('.products');
let popularContainer = document.querySelector('.populars');
let cartProducts = document.querySelector('.cartexpnd');
let cartIcon = document.querySelector('.carticon');

// Products Data Arrays
let products = [
    {name: "Chair", headline: "Armless Chair", price: "Rs. 10,000", img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}, 
    {name: "Stool", headline: "Wooden Stool", price: "Rs. 6,000", img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}, 
    {name: "Table", headline: "Marble Table", price: "Rs. 18,000", img: "https://images.unsplash.com/photo-1678250707989-c97faf1ef02f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHRhYmxlfGVufDB8fDB8fHww"}, 
    {name: "Sofa", headline: "Leather Sofa", price: "Rs. 30,000", img: "https://images.unsplash.com/photo-1691480152351-4b3f2c89ccff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D"}
];
let popularProducts = [
    {name: "Table", headline: "Marble Table", price: "Rs. 18,000", img: "https://images.unsplash.com/photo-1678250707989-c97faf1ef02f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHRhYmxlfGVufDB8fDB8fHww"}, 
    {name: "Chair", headline: "Armless Chair", price: "Rs. 10,000", img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}, 
    {name: "Sofa", headline: "Leather Sofa", price: "Rs. 30,000", img: "https://images.unsplash.com/photo-1691480152351-4b3f2c89ccff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D"}, 
    {name: "Stool", headline: "Wooden Stool", price: "Rs. 6,000", img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
];

// Function to add dynamically products to Store Page
function showProducts() {
    let clutter = "";
    products.forEach((data, idx) => {
      clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                        <img class="w-full h-full object-cover" src="${data.img}" alt="" />
                    </div>
                    <div class="data w-full px-2 py-5">
                        <h1 class="font-semibold text-xl leading-none tracking-tight">${data.name}</h1>
                        <div class="flex justify-between w-full items-center mt-2">
                            <div class="w-1/2">
                                <h3 class="font-semibold opacity-20">${data.headline}</h3>
                                <h4 class="font-semibold mt-2">${data.price}</h4>
                            </div>
                            <button class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400" data-index="${idx}"><i class="add ri-add-line" data-index="${idx}"></i></button>
                        </div>
                    </div>
                </div>`;  
    })

    productsContainer.innerHTML = clutter;
}

// Function to add dynamically popular products to Store Page
function showPopularProducts() {
    let clutter = "";
    products.forEach((data, idx) => {
      clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${data.img}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${data.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${data.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${data.price}</h4>
                    </div>
                </div>`;  
    })

    popularContainer.innerHTML = clutter;
}

// Add to cart functionality
function addToCart() {
    
    let cart = [];
    productsContainer.addEventListener('click', (val) => {

        if(val.target.classList.contains('add')) {

            cart.push(products[val.target.dataset.index]);

            let clutter = "";
            cart.forEach((elem) => {
                clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                                <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                                    <img class="w-full h-full object-cover" src="${elem.img}" alt="" />
                                </div>
                                <div>
                                    <h3 class="font-semibold">${elem.name}</h3>
                                    <h5 class="text-sm font-semibold opacity-80">${elem.price}</h5>
                                </div>
                            </div>`;
            })

            cartProducts.innerHTML = clutter;
        }
    })
}

// Show the items inside the cart
function showCart() {

    cartIcon.addEventListener('click', () => {
        let showAddedProducts = setTimeout(() => {
            cartProducts.style.display = 'block';
        }, 200)

        setTimeout(() => {
            cartProducts.style.display = 'none';
        }, 4000);
    })
}


showProducts();
showPopularProducts();
addToCart();
showCart();