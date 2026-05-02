// // Rest Operator Uses Case
// function getScore(...score) {
//     let sum = 0;
//     score.forEach(function (val) {
//         sum = sum + val;
//     });
//     return sum;
// }

// console.log(getScore(1, 2, 3));


// // Using Function as Number
// function add(v) {
//     v();
// }

// add(function() {
//     console.log('Ok! Ho Gya.');
// })

// let fruits = ['Apple', 'Banana', 'Mango'];

// fruits.push('Guava');
// fruits.unshift('Pineapple');
// fruits.pop();
// fruits.push('Kiwi');
// fruits.sort().reverse();


// let colors = ['Green', 'Yellow',];
// colors.splice(1, 0, 'Red', 'Blue');

// let newColors = colors.slice(1, 3);
// console.log(newColors);

// let num = [1, 2, 3, 4, 5, 6];
// let newNum = num.map(function(val) {
//     return val ** 2;
// });


// let num1 = [1, 24, 13, 4, 52, 56];
// let newNum1 = num1.filter((val) => {
//     return val>10;
// });

// let num2 = [2, 3, 4, 6];
// let newNum2 = num2.reduce((acc, val) => {
//     return acc + val;
// }, 0);

// let num3 = [10, 52, 3, 42, 5, 6];
// let newNum3 = num3.find((val) => {
//     return val<10;
// });

// let num4 = [10, 52, 32, 42, 3, 68];
// let newNum4 = num4.some((val) => {
//     return val<35;
// });

// let num5 = [10, 52, 32, 42, 56, 68];
// let newNum5 = num5.every((val) => {
//     return val%2 === 0;
// });

// let fullName = ['Bilal', 'Safdar'];
// let [firstName , lastName] = fullName;

// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];


// let obj = {
//     name : 'Bilal',
//     age : 21,
//     isEnrolled : true,
// };

// const user = {
//     "first-name": "Bilal",
// };

// let key = "age"
// const user1 = {
//     age: 21,
// };

// const locations = {
//     city: 'Rawalpindi',
//     coordinates: {
//         lat: 23.5,
//         lng: 86.1,
//     },
// };

// let { city } = locations;
// let { lat } = locations.coordinates;

// const user2 = {
//     "first-name": 'Bilal',
// }

// let {'first-name': firstName1} = user2;

// const course = {
//     title: 'JavaScript',
//     duration: '4 Weeks'
// };

// Object.entries(course).forEach(function (val) {
//     console.log(val[0] + ': ' + val[1]);
// });

// for (let key in course) {
//     console.log(key);
// };

// const original = { a: 1, b: 2 };
// const copyOriginal = {...original};

// const obj1 = { info: { score: 80 } };
// let clone = JSON.parse(JSON.stringify(obj1));
// clone.info.score = 100;
// console.log(obj1.info.score);

// const person = {};
// console.log(person?.profile?.name);

// const key1 = "role";
// let obj2 = {
//     name: 'Bilal',
//     [key1]: 'admin',
// };


// let list = document.querySelectorAll('li');
// list.forEach(val => {
//     console.log(val.textContent);
// })

// let div = document.querySelector('div');
// div.setAttribute('title', 'Some Info')

// let ul = document.querySelector('ul');
// let newLi = document.createElement('li');

// newLi.textContent = 'Peach';
// ul.appendChild(newLi);

// let li = document.querySelectorAll('ul li:nth-child(2n)');
// li.forEach(val => {
//     val.classList.add('trying');
// });

// const p1 = document.querySelector('p');
// p1.innerHTML = '<b>Updated</b> by JS.';

// const img1 = document.querySelector('img').getAttribute('src');
// // console.log(img1);

// const div1 = document.querySelector('div');
// div1.setAttribute('title', 'Going Pretty Good!');

// const img2 = document.createElement('img');
// img2.setAttribute('src', 'https://placehold.co/400');
// div1.prepend(img2);

// let input = document.querySelector('input');
// input.addEventListener('input', function(text) {
//     if(text.data !== null)
//         {console.dir(text.data)};
// })

// let selection = document.querySelector('select');
// let h2 = document.querySelector('h2');

// selection.addEventListener('change', function(val) {
//     h2.textContent = `Selected ${val.target.value} `
// })

// let h2 = document.querySelector('h2')

// window.addEventListener('keydown', function(dets) {
//     if(dets.key === ' '){
//         h2.textContent = 'SPC';
//     } else {
//         h2.textContent = dets.key;}
// })



// let colorChangingDiv = document.querySelector('#color-change');

// colorChangingDiv.addEventListener('mouseover', function(){
//     colorChangingDiv.style.backgroundColor = 'blueviolet';
// });

// colorChangingDiv.addEventListener('mouseout', function(){
//     colorChangingDiv.style.backgroundColor = 'brown';
// });

// window.addEventListener('mousemove', function(dets) {
//     colorChangingDiv.style.top = dets.clientY + 'px';
//     colorChangingDiv.style.left = dets.clientX + 'px';
// });

// let ul = document.querySelector('ul');
// ul.addEventListener('click', function(dets) {
//     dets.target.classList.toggle('line');
// })

// let charInput = document.querySelector('input[placeholder="Start Writing Here..."]');
// let textCount = document.querySelector('span');

// charInput.addEventListener('input', function() {
//     let left = 16 - charInput.value.length;
//     textCount.textContent = left;

//     if(left > 0) {
//         textCount.style.color = 'rgba(125, 255, 255, 0.75)';

//     } else {
//         textCount.style.color = 'rgba(255, 10, 10, 0.85)';

//     }
// });





// let authForm = document.querySelector('#authForm');
// let authEmail = document.querySelector('#email');
// let authPassword = document.querySelector('#password');

// let btnUpload = document.querySelector('#btn1');
// let fileSubmittion = document.querySelector('input[type="file"]');
// let inputs = document.querySelectorAll('input:not([type="file"]), textarea[placeholder="Description"]');


// btnUpload.addEventListener('click', function () {
//     fileSubmittion.click();
// });


// fileSubmittion.addEventListener('change', function (dets) {
//     const filer = dets.target.files[0];
//     if (filer) {
//         btnUpload.textContent = filer.name;
//     }
// });


// authForm.addEventListener('submit', function (dets) {
//     dets.preventDefault();

//     document.querySelector('#emailError').textContent = "";
//     document.querySelector('#passwordError').textContent = "";
//     document.querySelector('#resultMessage').textContent = "";

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     let authEmailAns = emailRegex.test(authEmail.value);
//     let authPasswordAns = passwordRegex.test(authPassword.value);

//     let isValid = true;

//     if (!authEmailAns) {
//         document.querySelector('#emailError').textContent = '* Email is Incorrect.';
//         document.querySelector('#emailError').style.display = "initial";
//         isValid = false;
//     }
//     if (!authPasswordAns) {
//         document.querySelector('#passwordError').textContent = '* Password is Incorrect.';
//         document.querySelector('#passwordError').style.display = "initial";
//         isValid = false;
//     }

//     if (isValid) {
//         document.querySelector('#resultMessage').textContent = 'Both Email & Password are Correct.';

        
//         let infoCard = document.createElement('div');
//         infoCard.classList.add('card');
//         document.body.appendChild(infoCard);

//         let image = document.createElement('img');
//         if (fileSubmittion.files[0]) {
//             image.src = URL.createObjectURL(fileSubmittion.files[0]);
//         } else {
//             image.src = 'https://placehold.co/600x400';
//         }

//         let h2 = document.createElement('h2');
//         h2.textContent = inputs[0].value;

//         let h5 = document.createElement('h5');
//         h5.textContent = inputs[1].value;

//         let p1 = document.createElement('p');
//         p1.textContent = inputs[2].value;

//         let p2 = document.createElement('p');
//         p2.textContent = inputs[3].value;
//         infoCard.appendChild(image);
//         infoCard.appendChild(h2);
//         infoCard.appendChild(h5);
//         infoCard.appendChild(p1);
//         infoCard.appendChild(p2);

//         inputs.forEach(function (inp) {
//             inp.value = '';
//         });

//         btnUpload.textContent = 'Upload file';
//     }
// });



function clickLimiter() {
    let click = 0;
    return function() {
        if(click < 5) {
            click++;
            console.log(`Clicked: ${click} times!`)
        }
        else {
            console.error('Limit Exceeded!');
        }
    }
};

let clkFnc = clickLimiter();
clkFnc();



const userManager = {
    users: [],
    init: function() {
        document.querySelector
        alert('Working');
    },
    addUser: function() {},
    removeUser: function() {},
}

userManager.init();