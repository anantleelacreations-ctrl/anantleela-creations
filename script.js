// ===============================
// Anantleela Creations - script.js
// ===============================

// Smooth scroll for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Header Shadow
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if(window.scrollY > 20){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.12)";
    }else{
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }

});

// Product Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";
        card.style.transition=".3s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

console.log("🙏 Jai Shri Krishna");
console.log("Welcome to Anantleela Creations");
