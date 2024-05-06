let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let container = document.querySelector(".container");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        console.log(item.content);
        console.log(item.author);
        quote.innerText = item.content;
        author.innerHTML = item.author;

        // Generate random RGB color
        let randomColor = getRandomColor();
        // Apply the random background color to the container
        container.style.backgroundColor = randomColor;
    });
};

// Function to generate random RGB color
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
