const pacman = document.querySelector(".pacman");
let speed = 5;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

window.addEventListener("load", () => {
    pacman.style.position = "absolute";
    pacman.style.left = 0;
    pacman.style.top = 0;
});

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            pacman.style.left = parseInt(pacman.style.left) - speed + "px";
            pacman.style.transform = 'rotate(180deg)';
            break;
        case "ArrowRight":
            pacman.style.left = parseInt(pacman.style.left) + speed + "px";
            pacman.style.transform = 'rotate(0deg)';
            break;
        case "ArrowUp":
            pacman.style.top = parseInt(pacman.style.top) - speed + "px";
            pacman.style.transform = 'rotate(270deg)';
            break;
        case "ArrowDown":
            pacman.style.top = parseInt(pacman.style.top) + speed + "px";
            pacman.style.transform = 'rotate(90deg)';
            break;
    }
});
