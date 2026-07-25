// Mobile Menu

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");

    const icon = menu.querySelector("i");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Close menu after clicking a link

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");

        const icon = menu.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});

// Header shadow on scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {
        header.style.background = "rgba(0,0,0,0.75)";
    } else {
        header.style.background = "rgba(0,0,0,0.25)";
    }

});
// Animated Counters

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;
const target = +counter.dataset.target;

let count = 0;

const speed = target / 100;

const updateCounter = () =>{

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

},{threshold:0.5});

counters.forEach(counter=>{
counterObserver.observe(counter);
});
