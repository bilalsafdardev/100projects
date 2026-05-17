// Selectors
let btn = document.querySelector('button');
let main = document.querySelector('main');

// Array of Quotes
let quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It is during our darkest moments that we must focus to see the light.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "Be yourself; everyone else is already taken.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "You must be the change you wish to see in the world.",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  "The supreme art of war is to subdue the enemy without fighting."
]


// Event Listner for click event
btn.addEventListener('click', ()=>{

    // Gives random index of Quote
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length);

    //Settng random quoteBox Position on screen
    let x = Math.floor(Math.random() * 100) + '%';
    let y = Math.floor(Math.random() * 100) + '%';
    let scl = Math.random() * 2;
    let rot = Math.floor(Math.random() * 180) + 'deg';

    //Setting random colors to Quotes
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    // Created quoteBox with class and appended it to main tag and setting some properties
    let quoteBox = document.createElement("div");quoteBox.className = 'quote_box';
    main.appendChild(quoteBox);
    quoteBox.style.top = y;
    quoteBox.style.left = x;
    quoteBox.style.scale = scl;
    quoteBox.style.rotate = rot;

    // Create and append h3 to quoteBox and added quote and setting some properties
    let h3 = document.createElement("h3");
    quoteBox.append(h3);
    h3.textContent = `${quotes[randomQuoteIndex]}`;
    h3.style.color = `rgb(${c1},${c2},${c3})`;
})