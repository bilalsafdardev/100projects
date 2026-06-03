// Selectors
let main = document.querySelector('main');

// Array of Stories
const storiesData = [
  {
    id: 0,
    isFollowed: true,
    isLiked: true,
    videoUrl: "../YouTube Shorts/Videos/01.mp4",
    profilePic: "https://images.unsplash.com/photo-1776532627820-302306e3c876?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    username: "nature_vibes",
    caption: "Golden hour hits different in the spring! 🌼✨ #nature #aesthetic",
    likes: "12.4K",
    comments: "342"
  },
  {
    id: 1,
    isFollowed: false,
    isLiked: false,
    videoUrl: "../YouTube Shorts/Videos/08.mp4",
    profilePic: "https://images.unsplash.com/photo-1773991179833-351ff05fbf9e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmlnaHQlMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D",
    username: "cyber_runner",
    caption: "Midnight drives through the neon grid. 🌃🚙 #cyberpunk #synthwave",
    likes: "8.9K",
    comments: "198"
  },
  {
    id: 2,
    isFollowed: true,
    isLiked: false,
    videoUrl: "../YouTube Shorts/Videos/06.mp4",
    profilePic: "https://images.unsplash.com/photo-1779675397130-370aa243cff3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    username: "ocean_breeze",
    caption: "Find me where the waves crash. 🌊 missing the summer sun.",
    likes: "24.1K",
    comments: "812"
  },
  {
    id: 3,
    isFollowed: false,
    isLiked: true,
    videoUrl: "../YouTube Shorts/Videos/04.mp4",
    profilePic: "https://images.unsplash.com/photo-1778034342784-e97de7ed1b5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    username: "cafe_morning",
    caption: "First cup of the day is a mandatory ritual. ☕️🤎 #coffee",
    likes: "5.6K",
    comments: "94"
  },
  {
    id: 4,
    isFollowed: false,
    isLiked: false,
    videoUrl: "../YouTube Shorts/Videos/05.mp4",
    profilePic: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwYWNlJTIwZXhwbG9yZXJ8ZW58MHx8MHx8fDA%3D",
    username: "astro_dust",
    caption: "Stargazing into deep space. We are so small. 🌌✨ #astronomy",
    likes: "45.0K",
    comments: "1,204"
  },
  {
    id: 5,
    isFollowed: true,
    isLiked: true,
    videoUrl: "../YouTube Shorts/Videos/06.mp4",
    profilePic: "https://images.unsplash.com/photo-1499083773823-5000fa2b23e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNrYXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    username: "kickflip_king",
    caption: "Finally landed this line after 20 tries! 🛹🔥 #skateboarding",
    likes: "15.3K",
    comments: "411"
  },
  {
    id: 6,
    isFollowed: true,
    isLiked: false,
    videoUrl: "../YouTube Shorts/Videos/07.mp4",
    profilePic: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91bnRhaW5zfGVufDB8fDB8fHww",
    username: "peak_adventures",
    caption: "The air gets thin up here, but the view is worth it. 🏔️❄️",
    likes: "31.2K",
    comments: "650"
  },
  {
    id: 7,
    isFollowed: false,
    isLiked: true,
    videoUrl: "../YouTube Shorts/Videos/08.mp4",
    profilePic: "https://images.unsplash.com/photo-1593362831502-5c3ad1c05f57?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmJvd3xlbnwwfHwwfHx8MA%3D%3D",
    username: "cozy_rain",
    caption: "Perfect weather for lofi music and reading. 🌧️📖 #aesthetic",
    likes: "19.7K",
    comments: "520"
  },
  {
    id: 8,
    isFollowed: true,
    isLiked: true,
    videoUrl: "../YouTube Shorts/Videos/01.mp4",
    profilePic: "https://plus.unsplash.com/premium_photo-1727942418440-d085b3b5f065?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    username: "gourmet_bites",
    caption: "Prep work is the secret to a perfect dinner. 🔪🍅 #cooking",
    likes: "9.2K",
    comments: "175"
  },
  {
    id: 9,
    isFollowed: false,
    isLiked: false,
    videoUrl: "../YouTube Shorts/Videos/010.mp4",
    profilePic: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBhcnR5fGVufDB8fDB8fHww",
    username: "dance_groove",
    caption: "When the weekend finally arrives! 🕺🎉 Tag a friend.",
    likes: "53.8K",
    comments: "2,190"
  }
]

function showData() {

  let clutter = "";
  storiesData.forEach((data) => {
      
      clutter += `<div class="single_short">
                      <video id="${data.id}" autoplay loop muted>
                          <source src="${data.videoUrl}">
                      </video>
                      <div class="info">
                          <div class="details">
                              <div class="profile_pic">
                                  <img src="${data.profilePic}" alt="">
                              </div>
                              <div class="account">
                                  <h4>${data.username}</h4>
                                  <button class="follow-btn" data-id="${data.id}">${data.isFollowed ? "Unfollow" : "Follow"}</button>
                              </div>
                          </div>
                          <div class="caption">
                              <h3>${data.caption}</h3>
                          </div>
                      </div>
                      <div class="socials">
                          <div class="impression">
                              <i data-id="${data.id}" class="like-btn ${data.isLiked ? "ri-heart-fill" : "ri-heart-line"}"></i>
                              <h4>${data.likes}</h4>
                          </div>
                          <div class="impression">
                              <i class="ri-chat-3-line"></i>
                              <h4>${data.comments}</h4>
                          </div>
                          <div class="impression">
                              <i class="ri-share-forward-line"></i>
                          </div>
                          <div class="impression">
                              <i class="ri-more-2-fill"></i>
                          </div>
                      </div>
                  </div>`;
  })

  main.innerHTML = clutter;

}

showData();

main.addEventListener('click', (vals) => {
  const targetId = parseInt(event.target.dataset.id, 10);
  const story = storiesData.find(item => item.id === targetId);

  if (event.target.classList.contains('follow-btn')) {
    story.isFollowed = !story.isFollowed;
    showData();
  }

  if (event.target.classList.contains('like-btn')) {
    story.isLiked = !story.isLiked;
    showData();
  }
  
})



