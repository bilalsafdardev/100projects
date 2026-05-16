// Selectors
let btn = document.querySelector('button');
let main = document.querySelector('main');
let box = document.querySelector('.box');
let h2 = document.querySelector('h2');
let para = document.querySelector('p');


// Array of Objects
const pslTeams = [
  {
    teamName: "Peshawar Zalmi",
    primaryColor: "Yellow",
    secondaryColor: "Black",
    captainName: "Babar Azam"
  },
  {
    teamName: "Rawalpindiz",
    primaryColor: "Blue",
    secondaryColor: "Gold",
    captainName: "Mohammad Rizwan"
  },
  {
    teamName: "Islamabad United",
    primaryColor: "Red",
    secondaryColor: "White",
    captainName: "Shadab Khan"
  },
  {
    teamName: "Lahore Qalandars",
    primaryColor: "Green",
    secondaryColor: "Red",
    captainName: "Shaheen Shah Afridi"
  },
  {
    teamName: "Karachi Kings",
    primaryColor: "Blue",
    secondaryColor: "Red",
    captainName: "David Warner"
  },
  {
    teamName: "Hyderabad Kingsmen",
    primaryColor: "Teal",
    secondaryColor: "Orange",
    captainName: "Marnus Labuschagne"
  },
  {
    teamName: "Multan Sultans",
    primaryColor: "Dark Green",
    secondaryColor: "Yellow",
    captainName: "Ashton Turner"
  },
  {
    teamName: "Quetta Gladiators",
    primaryColor: "Purple",
    secondaryColor: "Gold",
    captainName: "Saud Shakeel"
  }
];


//Tracks click event
btn.addEventListener('click', ()=>{
    
    // Generate random index
    let random = Math.floor(Math.random() * pslTeams.length);

    // Altering the values
    h2.textContent = `${pslTeams[random].teamName}`;
    para.textContent = `${pslTeams[random].captainName}`;
    box.style.backgroundColor = `${pslTeams[random].secondaryColor}`;
    main.style.backgroundColor = `${pslTeams[random].primaryColor}`;
})