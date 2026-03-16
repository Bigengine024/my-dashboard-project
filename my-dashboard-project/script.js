// NAVBAR TOGGLE

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});


// MODAL

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => modal.style.display = "block";

closeBtn.onclick = () => modal.style.display = "none";


// FETCH DATA FROM API

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {

const postsContainer = document.getElementById("posts");

data.slice(0,6).forEach(post => {

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<h3>${post.title}</h3>
<p>${post.body}</p>
`;

postsContainer.appendChild(card);

});

});