const container = document.querySelector(".container");

function grid(squaresPerSide) {
    const gridSize = squaresPerSide ** 2;
    for(let i = 0 ; i < gridSize ; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = 100 / squaresPerSide + "%";
        square.style.width = 100 / squaresPerSide + "%";
        container.appendChild(square);

        square.addEventListener("mouseover", () => {
            square.classList.add("square-mouseover");
        });
    }
}

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    const numSquaresPerSide = parseInt(prompt("Enter the number of squares"));

    if(numSquaresPerSide <= 100) {
        container.innerHTML = "";
        grid(numSquaresPerSide);
    } else {
        alert("Please enter a value less than 100.");
    }
});

grid(16);
