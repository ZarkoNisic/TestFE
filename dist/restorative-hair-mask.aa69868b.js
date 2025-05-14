// Quantity buttons
let quantity = 1;
document.getElementById("increase").onclick = ()=>{
    quantity++;
    document.getElementById("quantity").textContent = quantity;
};
document.getElementById("decrease").onclick = ()=>{
    if (quantity > 1) {
        quantity--;
        document.getElementById("quantity").textContent = quantity;
    }
};
// Add to cart animation
document.getElementById("add-to-cart").onclick = ()=>{
    const feedback = document.getElementById("cart-feedback");
    feedback.style.display = "block";
    setTimeout(()=>{
        feedback.style.display = "none";
    }, 2000);
};
// Accordion
document.querySelectorAll(".accordion-toggle").forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
// Simple Carousel
const track = document.querySelector(".carousel-track");
const left = document.querySelector(".carousel-arrow.left");
const right = document.querySelector(".carousel-arrow.right");
let scrollPosition = 0;
left.onclick = ()=>{
    scrollPosition -= 220;
    track.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });
};
right.onclick = ()=>{
    scrollPosition += 220;
    track.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });
};

//# sourceMappingURL=restorative-hair-mask.aa69868b.js.map
