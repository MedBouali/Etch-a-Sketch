const container = document.querySelector(".container");

const SquaresPerSide = 50;

for(let i = 0 ; i < SquaresPerSide * SquaresPerSide ; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.height = 100 / SquaresPerSide + "%";
    grid.style.width = 100 / SquaresPerSide + "%";
    container.appendChild(grid);
}