const item1 = {
  id: "u001",
  name: "Daniel Brooks",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
};

const item2 = {
  id: "u002",
  name: "Marcus Reed",
  image: "https://images.unsplash.com/photo-1626978407649-de62156f1548?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
};

const item3 = {
  id: "u003",
  name: "Ethan Walker",
  image: "https://images.unsplash.com/photo-1525393839361-867d646aea41?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
};

const item4 = {
  id: "u004",
  name: "Oliver Hayes",
  image: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
};

const item5 = {
  id: "u005",
  name: "Sophia Martinez",
  image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
};

const item6 = {
  id: "u006",
  name: "Isabella Nguyen",
  image: "https://images.unsplash.com/photo-1541519481457-763224276691?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
};

const item7 = {
  id: "u007",
  name: "Liam Carter",
  image: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww"
};

const item8 = {
  id: "u008",
  name: "Amelia Foster",
  image: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
};


let cards = document.querySelector(#cards)

cards.innerHtml = `<div class="items" id="${item1.id}">
            <div class="img_container">
                <img src="${item1.image}" alt="${item1.name}'s Image">
            </div>
            <h5>${item1.name}</h5>
            <button>Add Friend</button>
            </div>`
