const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const body = document.querySelector("body");

setTimeout(() => {
    setInterval(() => {
        const svg = document.createElement("svg");
        svg.classList.add("dot");

        svg.style.top = `${random(0, window.innerHeight)}px`
        svg.style.left = `${random(0, window.innerWidth)}px`
        svg.style.opacity = `${Math.random()}`

        body.append(svg)
    }, 500)
})